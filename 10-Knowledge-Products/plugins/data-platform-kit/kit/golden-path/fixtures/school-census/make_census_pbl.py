#!/usr/bin/env python3
"""Build the synthetic School Census fixture: a stand-in for a PowerBuilder library (.pbl).
It holds only what the extractor reads — DataWindow definitions and embedded SQL as text,
encoded UTF-16LE inside a binary container — for Progressa's legacy PEMIS desktop module.
Simulated case: every table, column and value is invented."""
import sys, os
OUT = sys.argv[1] if len(sys.argv) > 1 else "census.pbl"

DW_DISTRICT = r'''release 12;
datawindow(units=0 timer_interval=0 color=1073741824 processing=1 )
table(column=(type=long updatewhereclause=yes key=yes name=dis_id dbname="district.dis_id" )
 column=(type=char(60) updatewhereclause=yes name=dis_name dbname="district.dis_name" )
 column=(type=char(40) updatewhereclause=yes name=dis_province dbname="district.dis_province" )
 retrieve="PBSELECT( VERSION(400) TABLE(NAME=~"district~" ) COLUMN(NAME=~"district.dis_id~") COLUMN(NAME=~"district.dis_name~") COLUMN(NAME=~"district.dis_province~")) ORDER(NAME=~"district.dis_name~" ASC=yes ) " update="district" updatewhere=1 updatekeyinplace=no )
compute(band=detail alignment="0" expression="upper(dis_name)" name=cdis_name )
'''
DW_GRADE = r'''release 12;
datawindow(units=0 processing=1 )
table(column=(type=long key=yes name=gra_id dbname="grade.gra_id" )
 column=(type=char(4) name=gra_code dbname="grade.gra_code" )
 column=(type=char(40) name=gra_desc dbname="grade.gra_desc" )
 retrieve="PBSELECT( VERSION(400) TABLE(NAME=~"grade~" ) COLUMN(NAME=~"grade.gra_id~") COLUMN(NAME=~"grade.gra_code~") COLUMN(NAME=~"grade.gra_desc~")) " )
'''
DW_LEARNER = r'''release 12;
datawindow(units=0 processing=0 )
table(column=(type=long key=yes name=lea_id )
 column=(type=char(12) name=lea_number ) column=(type=char(60) name=lea_name ) column=(type=char(60) name=lea_surname )
 column=(type=datetime name=lea_birth_date ) column=(type=char(1) name=lea_sex ) column=(type=long name=lea_sch_id )
 column=(type=long name=lea_gra_id ) column=(type=long name=lea_lst_id ) column=(type=datetime name=lea_admdate )
 column=(type=datetime name=lea_changed_at ) column=(type=char(16) name=lea_changed_by )
 column=(type=char(40) name=lst_desc ) column=(type=char(2) name=lst_code )
 retrieve="SELECT learner.lea_id, learner.lea_number, learner.lea_name, learner.lea_surname, learner.lea_birth_date, learner.lea_sex, learner.lea_sch_id, learner.lea_gra_id, learner.lea_lst_id, learner.lea_admdate, learner.lea_changed_at, learner.lea_changed_by, learnerstatus.lst_desc, learnerstatus.lst_code FROM learner, learnerstatus WHERE learner.lea_lst_id = learnerstatus.lst_id AND learner.lea_sch_id = :al_school" arguments=(("al_school", number)) )
compute(band=detail expression="lea_surname + ', ' + lea_name" name=clea_fullname )
'''
DW_SCHOOL = r'''release 12;
datawindow(units=0 processing=0 )
table(column=(type=long key=yes name=sch_id ) column=(type=char(10) name=sch_code ) column=(type=char(120) name=sch_name )
 column=(type=long name=sch_dis_id ) column=(type=long name=sch_lvl_id ) column=(type=long name=sch_capacity )
 column=(type=decimal(14,2) name=sch_grant ) column=(type=datetime name=sch_opendate )
 column=(type=datetime name=sch_changed_at ) column=(type=char(16) name=sch_changed_by )
 column=(type=char(40) name=lvl_desc ) column=(type=long name=lvl_id )
 retrieve="SELECT school.sch_id, school.sch_code, school.sch_name, school.sch_dis_id, school.sch_lvl_id, school.sch_capacity, school.sch_grant, school.sch_opendate, school.sch_changed_at, school.sch_changed_by, level.lvl_desc, level.lvl_id FROM school, level WHERE school.sch_lvl_id = level.lvl_id" )
'''
DW_RETURN = r'''release 12;
datawindow(units=0 processing=0 )
table(column=(type=long key=yes name=crt_id ) column=(type=long name=crt_sch_id ) column=(type=long name=crt_year )
 column=(type=long name=crt_boys ) column=(type=long name=crt_girls ) column=(type=long name=crt_total )
 column=(type=long name=crt_teachers ) column=(type=datetime name=crt_submitted ) column=(type=char(16) name=crt_changed_by )
 retrieve="SELECT crt_id, crt_sch_id, crt_year, crt_boys, crt_girls, crt_total, crt_teachers, crt_submitted, crt_changed_by FROM censusreturn WHERE crt_sch_id = :al_school AND crt_year = :al_year" arguments=(("al_school", number),("al_year", number)) )
'''
DW_CANDIDATES = r'''release 12;
datawindow(units=0 processing=0 )
table(column=(type=long name=exm_lea_id ) column=(type=char(8) name=exm_session ) column=(type=char(10) name=exm_centre )
 retrieve="" )
'''
SCRIPTS = r'''forward
global type w_census from window
end type
end forward

event ue_save_return;
long ll_id, ll_school, ll_year
string ls_msg
ll_school = dw_return.GetItemNumber(1, "crt_sch_id")
ll_year = dw_return.GetItemNumber(1, "crt_year")
SELECT crt_id INTO :ll_id FROM censusreturn WHERE crt_sch_id = :ll_school AND crt_year = :ll_year USING SQLCA;
IF SQLCA.SQLCode = 100 THEN
   INSERT INTO censusreturn (crt_sch_id, crt_year, crt_boys, crt_girls, crt_total, crt_teachers, crt_submitted, crt_changed_by)
   VALUES (:ll_school, :ll_year, :ll_boys, :ll_girls, :ll_total, :ll_teachers, NOW(), :gs_login) USING SQLCA;
ELSE
   UPDATE censusreturn SET crt_boys = :ll_boys, crt_girls = :ll_girls, crt_total = :ll_total, crt_teachers = :ll_teachers WHERE crt_id = :ll_id USING SQLCA;
END IF
IF SQLCA.SQLCode < 0 THEN
   ls_msg = "Save failed: " + SQLCA.SQLErrText
   MessageBox("School census", ls_msg)
END IF
end event

event ue_transfer_learner;
long ll_learner, ll_from, ll_to, ll_status
SELECT lst_id INTO :ll_status FROM learnerstatus WHERE lst_code = 'TR' USING SQLCA;
INSERT INTO transfer (trf_lea_id, trf_fromsch, trf_tosch, trf_date, trf_changed_by) VALUES (:ll_learner, :ll_from, :ll_to, NOW(), :gs_login) USING SQLCA;
UPDATE learner SET lea_sch_id = :ll_to, lea_lst_id = :ll_status, lea_changed_at = NOW(), lea_changed_by = :gs_login WHERE lea_id = :ll_learner USING SQLCA;
end event

event ue_load_teachers;
DECLARE c_teachers CURSOR FOR
 SELECT teacher.tea_id, teacher.tea_number, teacher.tea_name, teacher.tea_sch_id, teacher.tea_qua_id, teacher.tea_postdate, teacher.tea_changed_at, teacher.tea_changed_by, qualification.qua_desc, qualification.qua_code
 FROM teacher, qualification WHERE teacher.tea_qua_id = qualification.qua_id AND teacher.tea_sch_id = :al_school;
end event

event open;
string ls_title
SELECT set_value INTO :ls_title FROM setting WHERE set_name = 'CENSUS_TITLE' USING SQLCA;
SELECT app_role INTO :gs_role FROM appuser WHERE app_login = :gs_login USING SQLCA;
SELECT msg_text INTO :ls_msg FROM msgtext WHERE msg_code = 'C001' USING SQLCA;
dw_learner.SetTransObject(SQLCA)
dw_school.SetTransObject(SQLCA)
end event
'''
parts = [DW_DISTRICT, DW_GRADE, DW_LEARNER, DW_SCHOOL, DW_RETURN, DW_CANDIDATES, SCRIPTS]
header = (b"HDR*PowerBuilder\x00\x00SYNTHETIC-FIXTURE\x00" ).ljust(512, b"\x00")
blob = bytearray(header)
for i, p in enumerate(parts):
    blob += b"ENT*" + bytes([i, 0, 0, 0]) + b"\x00" * 24   # 32-byte (even) entry header
    blob += p.encode("utf-16-le") + b"\x00\x00"
open(OUT, "wb").write(bytes(blob))
print("wrote", OUT, len(blob), "bytes")
