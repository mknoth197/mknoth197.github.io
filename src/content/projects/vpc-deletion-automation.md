---
title: "Account & VPC Deletion Automation"
summary: "I owned AWS account automation and the operational plumbing thousands of engineers depended on daily. Replaced a manual, hour-long account and VPC deletion process with an event-driven Step Functions and Lambda system (hours to seconds), designed out DNS subdomain-hijacking risk across ~900 hosted zones, and cut developer onboarding from hours to minutes with Dev Containers."
period: "2023 – 2025"
stack: ["step-functions", "lambda", "event-driven", "python", "route53", "dev-containers"]
metric:
  value: "hrs → s"
  label: "Execution time"
featured: true
order: 3
era: platform
---

## Scope

I owned AWS account automation and the operational plumbing that thousands of engineers depended on daily. Deleting accounts and VPCs sounds mundane until it becomes a repeated task with real blast radius. The original process was slow, manual, and easy to get wrong under pressure.

## What I built

- An **event-driven workflow** on AWS Step Functions and Lambda that coordinates account and VPC deletion safely and consistently, dropping execution time from **about an hour to seconds** and removing human error from the path.
- A **DNS subdomain-hijacking defense**: audited **thousands of DNS forwarders across ~900 hosted zones** and built automated verification and cleanup with the on-prem DNS and security teams, eliminating takeover risk.
- **Dev Containers** for the engineering org, cutting developer onboarding from hours to minutes with consistent, reproducible environments.

## Outcome

Long-lived, high-blast-radius infrastructure tasks became fast and safe by default, a whole class of DNS takeover risk was designed out, and new engineers got productive in minutes instead of hours.
