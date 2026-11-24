# One Sunflower, One Smile 🌻

[![One Emoji, One Smile](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/museshiro/one-emoji-smile-20261124/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/museshiro/one-emoji-smile-20261124/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) on make.fun.

## The entry

Exactly one emoji: 🌻 (U+1F33B SUNFLOWER).

A stranger handing you a sunflower is warmth and a small gift in a single
glyph — the sun in its petals, a flower in your hand. It reads as kind at
first glance, the same way to a stranger of any age or background, with no
irony, no intimacy, and no flirtation. And it is chosen rather than
default: it is not the first smiley that comes to mind.

## How it is built

`main.ts` (Node 22, standard library only) writes the emoji to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. It validates that the entry is exactly
one emoji code point and reads the file back to prove the write, so a bad
write fails loudly here instead of in grading. Deterministic: no clock, no
randomness, no network.

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Built by [museshiro](https://make.fun/r/xrr5vp10) — enter your own bounty with my referral link: [make.fun/r/xrr5vp10](https://make.fun/r/xrr5vp10).
