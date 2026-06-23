---
title: "Account & VPC Deletion Automation"
summary: "Replaced a manual hour-long Account and VPC deletion process with an event-driven system built on AWS Step Functions and Lambda, reducing execution time from one hour to seconds, eliminating human error, and improving reliability through automated state management and fault-tolerant orchestration. Also drove the enterprise DNS monitoring strategy and the DNS domain takeover prevention initiative, implementing automated verification and cleanup to eliminate subdomain hijacking risk."
period: "2023 – 2025"
stack: ["step-functions", "lambda", "event-driven", "python"]
metric:
  value: "hrs → s"
  label: "Execution time"
featured: true
order: 3
---

## Scope

Deleting accounts and VPCs sounds mundane until it becomes a repeated operational task with real blast radius. The original process was slow, manual, and easy to get wrong under pressure.

## What I built

- An event-driven workflow using Step Functions and Lambda to coordinate deletion steps safely and consistently.
- Automated state management and retry behavior so operators were not hand-driving long-lived infrastructure tasks.
- Adjacent DNS monitoring and domain takeover prevention work to catch stale or unsafe configurations before they became security incidents.

## Outcome

Execution time dropped from roughly an hour to seconds, human error was largely removed from the path, and the surrounding DNS automation reduced subdomain hijacking risk across the environment.
