# specimen, not yet run

# The acceptance checks of the identity and payment connections — KP3 Module 4

These are the fourteen checks of configurations I1 to I7 and P1 to P7, as the specification analysis behind the KP3 outline names them, written for Progressa. Each says what is run and what counts as a pass. **None has been run.** No identity provider with the published interface and no installation of the Payments block exists for KP3 at the date of this file, and nothing here says that anything runs. When a check passes on the built configuration, the build records the result, its date and its evidence in the build pack, and this specimen is replaced by the file as built.

The checks are taught in subtopics 4.3 and 4.5, and the storyboards of their demonstration segments follow them step by step. The configurations they check are in `identity-connection.specimen.yaml` and `payment-connection.specimen.yaml` beside this file.

## The identity connection — GovStack Identity specification, "Version 2.0; December 2025"

| Check | What is run | What counts as a pass | Rests on | Status |
|---|---|---|---|---|
| I1 | `POST /client-mgmt/oidc-client` registers the learner registration service as a client | The registered client is returned; its identifier is the `aud` of the token in check I3 | ID §8.1.1 | not run |
| I2 | `/.well-known/openid-configuration` and `/.well-known/jwks.json` are opened | Both answer. This shows the block can be reached, not that verification works, and is never the whole proof | ID §8.1.1 | not run |
| I3 | The lean sign-in flow, scope `openid`, for the enrolled test person, authenticated with a test credential | `POST /oauth/token` returns an ID token whose signature verifies against `/.well-known/jwks.json`, and whose `iss`, `aud`, `exp` and `sub` are present and valid | ID §9.1.2, ID §7.2.3, ID §8.1.1 | not run |
| I4 | The flow with claims; `GET /oidc/userinfo` with the access token | The claims of the requested scopes are returned and no others | ID §9.1.1, ID §7.2.1, ID §7.2.2, ID 6.8-r8 | not run |
| I5 | A sign-in whose authentication context value is not on the service's accepted list | The service refuses the token | ID §7.2.3 | not run |
| I6 | Two test clients sign in the same test person | The two `sub` values differ; neither client receives the unique identity number | ID §4.1.2, ID §7.2.1, ID 6.1-r11 | not run |
| I7 | `PUT /enrollment` with the flag that finalises the enrolment | The test person is created and can then sign in (check I3) | ID §8.2 | not run |

If the build offers only the read of a person by national number that KP2 left, checks I1 to I7 cannot be run against it, because that read is not the published interface. The demonstration then shows the read under its own name, as a contract of Progressa's beyond the published set, and these checks stay as written until a provider with the published interface is built.

## The payment connection — GovStack Payments specification, "Version 3.0; December 2025"

| Check | What is run | What counts as a pass | Rests on | Status |
|---|---|---|---|---|
| P1 | The same call from a block that is not configured as a source, then from the configured source | The first is refused; the second is accepted | PAY §9.1.1 | not run |
| P2 | A batch in a currency other than the programme account's | The batch is refused | PAY §9.1.1, PAY §4.16 | not run |
| P3 | `POST /identityAccountMapper/beneficiary` for one test beneficiary; the same functional identifier sent again from the same source | The registration is confirmed on the callback; the second request does not register the beneficiary twice | PAY §8.1.2, PAY §9.1.1 | not run |
| P4 | The test beneficiary onboarded (P3); a batch of one through `POST /batchtransactions`; then `Payment_Status_Check` at `POST /api/v1/batch` for that beneficiary | The answer is a status — success, failed or in progress — and not an error or not-found | PAY §8.1.4, PAY 6.11-r2 | not run |
| P5 | The address configured for pushed status | The status of the batch of check P4 arrives there | PAY §8.1.4 | not run |
| P6 | The transaction log of the batch of check P4 | The log shows the payer bank executing it and PayPro as its destination; the calling service calls no PayPro operation directly | PAY §9.1.3, PAY 6.11-r2 | not run |
| P7 | A call without an authorisation token, then the same call with one, through the caller's security server | The first is refused; the second is accepted | PAY §5.3.1, PAY §5.1.14 | not run |

A status call that names no payment proves nothing, because the government-to-person status check answers only about a payment that exists. That is why check P4 submits a batch of one before it asks for a status.
