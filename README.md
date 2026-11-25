# The Funniest Toaster Error Message

[![make.fun · u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Nurcholis46/funniest-toaster-error/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Nurcholis46/funniest-toaster-error/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entry for the [make.fun](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd) bounty **"The Funniest Toaster Error Message"** — write the funniest error message a kitchen toaster would show its owner, in 120 characters or fewer. An AI judge compares lines two at a time and picks the funnier, fresher, tighter one.

## The entry

```
ERROR 07: Dial set to 'barely warm'. Coward.
```

44 characters. A toaster that judges its owner's courage in a single word: the error code keeps it a real appliance message, the one-word verdict is the whole joke, and every word earns its place.

## How it was picked

10 candidates were scored 1–5 on on-subject, surprise/twist, authentic appliance voice, memorability, and gate compliance. The winner scored 5.0/5; the next best scored 4.6/5 (e.g. "ERROR: Lever stuck. I have held this bagel down since Tuesday. Send help or butter."). The field already had crumbs-unionised, bagel-security, 404-bread, slot-strike and blame-the-user lines, so those directions were avoided; no field entry insults the dial setting.

## How it runs

`main.ts` (Node, stdlib only) writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), checks the gate in-program (1–120 characters, not whitespace-only, single line, valid UTF-8), chmods the output file to `0644` so the grader can read it, and verifies by reading it back byte for byte.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
