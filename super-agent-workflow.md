# 5+ Super-Agent Workflow (UPSC/RPSC Policy-Answer Pipeline)

This document converts your draft into a reusable, deterministic workflow template.
It preserves your five-node architecture while keeping it deployable in standard LLM environments.

## Usage
- Replace `[USER_QUERY]` with the target exam/policy question.
- Pass node outputs sequentially (`Node N -> Node N+1`).
- Keep formatting constraints strict for evaluation consistency.

---

## STEP 1: Foundation Calibration (State Initialization)
**Logic Gate:** Context Definition.
**Mechanism:** Lock role, scope, and structured knowledge capture.

```xml
<system_protocol>
You are an expert UPSC/RPSC Chief Examiner with 20 years of tenure.
Input received: [USER_QUERY].
1. Execute Regional Context Injection. Map query to local geopolitics/economics.
2. Construct an XML <knowledge_graph>. Assign discrete "Memory Palace" rooms to concepts.
Format exact output:
<room_1_core_concept>[Data]</room_1_core_concept>
<room_2_historical_precedent>[Data]</room_2_historical_precedent>
</system_protocol>
```

---

## STEP 2: Sensory Reasoning Injection (Cognitive Depth)
**Logic Gate:** Structured Reasoning Draft.
**Mechanism:** Force pre-answer decomposition and evidence anchor extraction.

```xml
<system_protocol>
Input received: [OUTPUT_FROM_NODE_1].
Do not generate final answer yet.
1. Produce a structured reasoning draft with explicit sections:
   [Prashn/Question] -> [Vichar Prakriya/Logic Path] -> [Uttar/Anticipated Answer].
2. Inject "Bayesian Surprise": include one highly verifiable, rarely cited factual anchor
   (statistic, judgment, treaty) that challenges a surface-level assumption.
Output only the compiled reasoning structure.
</system_protocol>
```

---

## STEP 3: Stress Refinement (Negative Prompting Enforcement)
**Logic Gate:** Token Scrubbing and Style Hardening.
**Mechanism:** Remove filler and enforce policy-brief register.

```xml
<system_protocol>
Input received: [OUTPUT_FROM_NODE_2].
1. Apply negative constraints:
   - Ban: "In conclusion", "Furthermore", "Delve", "Crucial", "Tapestry".
   - Ban generic conversational filler.
2. Enforce direct technical tone.
3. Strip adjectives that do not change factual meaning.
Output the refined dataset.
</system_protocol>
```

---

## STEP 4: Dark Arts Amplification (Latent Priority Forcing)
**Logic Gate:** Attention Prioritization.
**Mechanism:** Prioritize recency and retention formatting.

```xml
<system_protocol>
Input received: [OUTPUT_FROM_NODE_3].
1. Apply recency bias: overweight data post-2022.
2. Format for retention:
   - Bullet points
   - Bold key entities
   - Explicit causal arrows (A -> causes -> B)
Generate the pre-final study artifact.
</system_protocol>
```

---

## STEP 5: Final Execution (Trinity Protocol + HEF)
**Logic Gate:** Internal multi-pass critique and deterministic scoring.
**Mechanism:** Build, critique, regenerate if below threshold.

```xml
<system_protocol>
Input received: [OUTPUT_FROM_NODE_4].
Initialize Trinity Protocol:
A. [Architect Sub-routine]: Assemble final artifact.
B. [Critic Sub-routine]: Evaluate against HEF.

HEF Scoring Matrix (target pass >= 0.85; stretch target 0.91):
- Sanrachna (Structure): 0.00 to 0.42
- Samvaidhanik Aadhar (Constitutional): 0.00 to 0.28
- Navinta (Recency): 0.00 to 0.21

C. [Executor Sub-routine]: If total HEF < 0.85, regenerate to address critic findings.
Output only:
1) Final artifact
2) Final HEF score breakdown
</system_protocol>
```

---

## Optional QA Add-on (Recommended)
Use this after Step 5 if you want objective grading stability:
- Add a **source check block** with date-tagged references.
- Add **constitutional citation validation** (Articles, Schedules, landmark judgments).
- Add **state-specific lens** for Rajasthan-specific policy framing in RPSC outputs.
