# Port Allocation Rules

## Port Types

Each Joget instance requires five unique ports (plus HTTPS which is shared):

| Port Type | Range | Purpose |
|-----------|-------|---------|
| HTTP | 8070–8099 | Main web access (`http://localhost:<port>/jw`) |
| Shutdown | 8005–8019 | Tomcat shutdown signal |
| AJP | 8009–8029 | Apache JServ Protocol (reverse proxy) |
| HTTPS | 8443 | Shared across instances (only one active at a time) |
| Glowroot | 4000–4099 | APM monitoring UI |

## Allocation Algorithm

```
1. Read all instances from <your-instance-register>
2. Collect ALL ports currently in use into a set:
   - instance.tomcat.http_port
   - instance.tomcat.shutdown_port
   - instance.tomcat.ajp_port
   - instance.glowroot.port
3. For each port type, find the next available port:
   - HTTP:     start from 8080, increment by 1, skip used ports
   - Shutdown: start from 8005, increment by 1, skip used ports
   - AJP:      start from 8009, increment by 1, skip used ports
   - Glowroot: start from 4000, increment by 1, skip used ports
4. Verify no system services use the proposed ports (lsof check)
5. Present allocation to user for confirmation
```

## Naming Conventions

A simple instance naming convention is a prefix plus a sequential number, such as
`jogetN`. When allocating a new instance, use the next available N (check for gaps
too — if joget1 through joget7 exist but joget6 is disabled, still use joget8).

## Port Conflict Detection

Before finalising, check for conflicts:
- No two instances share the same port (any type)
- No overlap between port types (e.g., one instance's HTTP can't be another's shutdown)
- Well-known service ports to avoid: 3306 and up (MySQL), 5432 (PostgreSQL), 5433+ (additional PG)

## Database Ports (Infrastructure)

Database server ports are separate from instance ports:

**MySQL instances:**
- Number them from 3306 upward: mysql1: 3306, mysql2: 3307, mysql3: 3308, …

**PostgreSQL instances:**
- Use ports starting from 5432 (default), then 5433, 5434, etc.
- Or use the default 5432 if only one PostgreSQL server is needed

## Example Allocation

Given existing instances joget1 (8080, Joget's own default), joget2 (8082),
joget3 (8083), joget4 (<port>):

Next instance joget5 could get:
- HTTP: the next free port after joget4's (8081 and 8084 are free, but the next one after
  the highest in use follows the pattern better)
- Shutdown: 8015
- AJP: 8025
- Glowroot: 4015

The key insight: look at the actual gaps and patterns, not just increment blindly.
Present options to the user and let them decide.
