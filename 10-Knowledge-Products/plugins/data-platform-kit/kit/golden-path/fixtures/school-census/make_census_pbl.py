#!/usr/bin/env python3
"""Build the synthetic School Census fixture: a stand-in for a PowerBuilder library (.pbl).
It holds only what the extractor reads — DataWindow definitions and embedded SQL as text,
encoded UTF-16LE inside a binary container — for Progressa's legacy PEMIS desktop module.
Simulated case: every table, column and value is invented."""
import sys, os
OUT = sys.argv[1] if len(sys.argv) > 1 else "census.pbl"

DW_DISTRICT = r'''release 12;
datawindow(units=0 timer_interval=0 color=1073741824 processing=1 )
table(column=(type=long updatewhereclause=yes key=yes name=dis_serial dbname="district.dis_serial" )
 column=(type=char(60) updatewhereclause=yes name=dis_name dbname="district.dis_name" )
 column=(type=char(40) updatewhereclause=yes name=dis_province dbname="district.dis_province" )
 retrieve="PBSELECT( VERSION(400) TABLE(NAME=~"district~" ) COLUMN(NAME=~"district.dis_serial~") COLUMN(NAME=~"district.dis_name~") COLUMN(NAME=~"district.dis_province~")) ORDER(NAME=~"district.dis_name~" ASC=yes ) " update="district" updatewhere=1 updatekeyinplace=no )
compute(band=detail alignment="0" expression="upper(dis_name)" name=cdis_name )
'''
DW_GRADE = r'''release 12;
datawindow(units=0 processing=1 )
table(column=(type=long key=yes name=gra_serial dbname="grade.gra_serial" )
 column=(type=char(4) name=gra_code dbname="grade.gra_code" )
 column=(type=char(40) name=gra_desc dbname="grade.gra_desc" )
 retrieve="PBSELECT( VERSION(400) TABLE(NAME=~"grade~" ) COLUMN(NAME=~"grade.gra_serial~") COLUMN(NAME=~"grade.gra_code~") COLUMN(NAME=~"grade.gra_desc~")) " )
'''
DW_LEARNER = r'''release 12;
datawindow(units=0 processing=0 )
table(column=(type=long key=yes name=lea_serial )
 column=(type=char(12) name=lea_number ) column=(type=char(60) name=lea_name ) column=(type=char(60) name=lea_surname )
 column=(type=datetime name=lea_dobirth ) column=(type=char(1) name=lea_sex ) column=(type=long name=lea_schref )
 column=(type=long name=lea_graref ) column=(type=long name=lea_lstref ) column=(type=datetime name=lea_admdate )
 column=(type=datetime name=lea_timestamp ) column=(type=char(16) name=lea_userid )
 column=(type=char(40) name=lst_desc ) column=(type=char(2) name=lst_code )
 retrieve="SELECT learner.lea_serial, learner.lea_number, learner.lea_name, learner.lea_surname, learner.lea_dobirth, learner.lea_sex, learner.lea_schref, learner.lea_graref, learner.lea_lstref, learner.lea_admdate, learner.lea_timestamp, learner.lea_userid, learnerstatus.lst_desc, learnerstatus.lst_code FROM learner, learnerstatus WHERE learner.lea_lstref = learnerstatus.lst_serial AND learner.lea_schref = :al_school" arguments=(("al_school", number)) )
compute(band=detail expression="lea_surname + ', ' + lea_name" name=clea_fullname )
'''
DW_SCHOOL = r'''release 12;
datawindow(units=0 processing=0 )
table(column=(type=long key=yes name=sch_serial ) column=(type=char(10) name=sch_code ) column=(type=char(120) name=sch_name )
 column=(type=long name=sch_disref ) column=(type=long name=sch_lvlref ) column=(type=long name=sch_capacity )
 column=(type=decimal(14,2) name=sch_grant ) column=(type=datetime name=sch_opendate )
 column=(type=datetime name=sch_timestamp ) column=(type=char(16) name=sch_userid )
 column=(type=char(40) name=lvl_desc ) column=(type=long name=lvl_serial )
 retrieve="SELECT school.sch_serial, school.sch_code, school.sch_name, school.sch_disref, school.sch_lvlref, school.sch_capacity, school.sch_grant, school.sch_opendate, school.sch_timestamp, school.sch_userid, level.lvl_desc, level.lvl_serial FROM school, level WHERE school.sch_lvlref = level.lvl_serial" )
'''
DW_RETURN = r'''release 12;
datawindow(units=0 processing=0 )
table(column=(type=long key=yes name=crt_serial ) column=(type=long name=crt_schref ) column=(type=long name=crt_year )
 column=(type=long name=crt_boys ) column=(type=long name=crt_girls ) column=(type=long name=crt_total )
 column=(type=long name=crt_teachers ) column=(type=datetime name=crt_submitted ) column=(type=char(16) name=crt_userid )
 retrieve="SELECT crt_serial, crt_schref, crt_year, crt_boys, crt_girls, crt_total, crt_teachers, crt_submitted, crt_userid FROM censusreturn WHERE crt_schref = :al_school AND crt_year = :al_year" arguments=(("al_school", number),("al_year", number)) )
'''
DW_CANDIDATES = r'''release 12;
datawindow(units=0 processing=0 )
table(column=(type=long name=exm_learef ) column=(type=char(8) name=exm_session ) column=(type=char(10) name=exm_centre )
 retrieve="" )
'''
SCRIPTS = r'''forward
global type w_census from window
end type
end forward

event ue_save_return;
long ll_serial, ll_school, ll_year
string ls_msg
ll_school = dw_return.GetItemNumber(1, "crt_schref")
ll_year = dw_return.GetItemNumber(1, "crt_year")
SELECT crt_serial INTO :ll_serial FROM censusreturn WHERE crt_schref = :ll_school AND crt_year = :ll_year USING SQLCA;
IF SQLCA.SQLCode = 100 THEN
   INSERT INTO censusreturn (crt_schref, crt_year, crt_boys, crt_girls, crt_total, crt_teachers, crt_submitted, crt_userid)
   VALUES (:ll_school, :ll_year, :ll_boys, :ll_girls, :ll_total, :ll_teachers, NOW(), :gs_userid) USING SQLCA;
ELSE
   UPDATE censusreturn SET crt_boys = :ll_boys, crt_girls = :ll_girls, crt_total = :ll_total, crt_teachers = :ll_teachers WHERE crt_serial = :ll_serial USING SQLCA;
END IF
IF SQLCA.SQLCode < 0 THEN
   ls_msg = "Save failed: " + SQLCA.SQLErrText
   MessageBox("School census", ls_msg)
END IF
end event

event ue_transfer_learner;
long ll_learner, ll_from, ll_to, ll_status
SELECT lst_serial INTO :ll_status FROM learnerstatus WHERE lst_code = 'TR' USING SQLCA;
INSERT INTO transfer (trf_learef, trf_fromsch, trf_tosch, trf_date, trf_userid) VALUES (:ll_learner, :ll_from, :ll_to, NOW(), :gs_userid) USING SQLCA;
UPDATE learner SET lea_schref = :ll_to, lea_lstref = :ll_status, lea_timestamp = NOW(), lea_userid = :gs_userid WHERE lea_serial = :ll_learner USING SQLCA;
end event

event ue_load_teachers;
DECLARE c_teachers CURSOR FOR
 SELECT teacher.tea_serial, teacher.tea_number, teacher.tea_name, teacher.tea_schref, teacher.tea_quaref, teacher.tea_postdate, teacher.tea_timestamp, teacher.tea_userid, qualification.qua_desc, qualification.qua_code
 FROM teacher, qualification WHERE teacher.tea_quaref = qualification.qua_serial AND teacher.tea_schref = :al_school;
end event

event open;
string ls_title
SELECT set_value INTO :ls_title FROM setting WHERE set_name = 'CENSUS_TITLE' USING SQLCA;
SELECT app_role INTO :gs_role FROM appuser WHERE app_login = :gs_userid USING SQLCA;
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
