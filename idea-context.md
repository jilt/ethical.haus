# Ethical Haus — XION + INJECTIVE Pitch Deck (Grant Application)

## Project name
Ethical Haus — SocialFi Trading Hub

## One-line summary
Verifiable on-chain social finance trading that turns high-signal X posts into transparent, trust-less agent-driven trades and creator rewards, built on the XION + INJECTIVE stack.

## Core tech stack (XION + INJECTIVE)
- ERC-8004 Agent NFT standard for verifiable agent identity & reputation
- Agent identity & reputation are verifiable, portable, aligned to user trust
- ERC-8004 agent runs on INJECTIVE (execution rails + on-chain identity validation)
- XION + Verona handle verified users, trust attestations, and settlement rails
- Postgres hot cache + Filecoin cold archive for the data layer
- Xion meta-accounts for user verification

## Layer-by-layer architecture
### Data Layer (from index.html)
- Input: Quality Input — relevant X / Social Activity
- Store: Postgres Cache and Filecoin Node
- Verify: Xion meta accounts
- Output: Signal Intelligence
- Sell: Paid reputation API

### Identity Layer
- Register: ERC-8004 Agent NFT (on Injective)
- Describe: Agent URI + Endpoints
- Trust: Reputation Signals
- Validate: Xion to EVM Proofs
- Output: API Revenue + Creator Rewards

### Execution Layer (Injective)
- Input: Verified Signal on X
- Detect: Agent answers with a trade
- Optionality: User accepts the trade
- Execute: using White Whale and Neptune liquidity
- Split: Yield fee logic
- Rewards: To the user who opted in

### Reward Layer
- Input: Trade Results
- Match: Reward Rules (1% fee to our protocol)
- Split: Distribution Logic
- Send: Token Transfer/Bridge on xion/verona
- Output: High scored creator's Community rewarded

## Key product flow / User Flow
1. Quality user posts a DeFi / social-finance trading cast on X (replaces Farcaster).
2. Filter: our own quality score system verifies the user (Score > 80, replaces Neynar score).
3. Context: ERC-8004 agent (on Injective) instantly queries Postgres for live signals + Filecoin for historical context.
4. Delivery: Agent replies with actionable insights + an optional web app link on an X.com reply (replaces Farcaster Mini App).
5. Opt-In: User opens the web app > reviews guaranteed quotes.
6. Execution: White Whale + Neptune (flashloan services) execute via arbitrage (replaces 1inch/hummingbot Fusion). Generated fees flow to protocol infrastructure and reward stream pool.
- Every step is transparent and voluntary.

## Economy / Grant budget
- Target payout: $20,000 for 6 months (replacing smaller CELO/Gooddollar/Neynar/1inch-fusion budget)
- Reason: extra funds needed to build the custom quality score system that replaces Neynar/Neynar-growth-tier
- Lean infrastructure: Postgres + Filecoin + Xion + Injective + White Whale/Neptune liquidity
- Revenue streams: 1% execution fees (White Whale/Neptune arbitrage), paid reputation API subscriptions, content rewards, protocol-owned liquidity capture

## Grant ask
$20,000 — 6-month development runway to ship:
1. Custom quality score system (social ranking radar) — the core IP replacing Neynar + 1inch Fusion/Neynar growth-tier costs.
2. ERC-8004 agent on Injective with Xion↔EVM proof validation.
3. X social signal ingestion + White Whale + Neptune flashloan arbitrage execution pipeline.
4. Web app surfaced by the trustless agent on an X.com reply.
5. Creator rewards + dual-token (Creatorcoins/Buildercoins) distribution on Xion/Verona.

## Structure to follow (mirrors Ethical_SocialFi_Blueprint.pdf)
1. Title / Hero
2. The Problem / The Open Alternative
3. Core Components of Ethical Social Finance Trading
4. System Overview: Signal to Execution
5. Hybrid Data Layer: Speed + Sovereignty
6. Quality Ranking Layer (custom quality score)
7. Agent Identity: Trustless On-Chain Reputation (ERC-8004 on Injective)
8. Open Execution Engine (White Whale + Neptune, web app on X reply)
9. User Flow: From Signal to Trade
10. Sustainable Protocol Economics
11. Dual-Token Social Finance Trading Ecosystem
12. Open Protocols Everywhere / Manifesto
13. Flight Path: Protocol Roadmap & Initialization

## Replacements map (old -> new)
- CELO / Gooddollar / Base -> XION + Verona + Injective
- Farcaster -> X (web app shared by trustless agent on X.com reply)
- Neynar score -> custom quality score system (0-100, Score > 80)
- 1inch / Hummingbot -> White Whale arbitrage bots + White Whale / Neptune flashloan services
- Farcaster Mini App -> web app surfaced on X.com reply

## Assets / images
- Reuse visuals from Ethical_SocialFi_Blueprint.pdf (extracted images available in /tmp/opencode/blueprint_embedded and /tmp/opencode/blueprint_pages)
- Also available: img/step1..step6.jpg in the repo, background.png, social-preview.png
