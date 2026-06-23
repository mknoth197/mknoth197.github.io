---
title: "OneCloud — Enterprise Network Architecture"
summary: "Led an enterprise-wide network architecture consolidation across ~2,000 VPCs, optimizing NAT Gateway usage to cut annual cloud spend by $1M. Orchestrated an Enterprise DNS migration that remediated 140,000+ DNS-related security vulnerabilities while maintaining 100% uptime during cutover across global networks. Migrated 10,000+ AWS ACM certificates from email validation to automated DNS validation, eliminating certificate-related outage risk enterprise-wide."
period: "2023 – 2025"
stack: ["aws", "vpc", "transit-gateway", "route53", "terraform", "acm"]
metric:
  value: "$1M saved"
  label: "Annual cloud spend"
featured: true
order: 2
---

## Scope

OneCloud was a large-scale network simplification effort across thousands of VPCs. The problem was not just cost; it was the operational drag and security exposure that comes from fragmented network patterns repeated across the enterprise.

## What changed

- Consolidated NAT Gateway usage patterns to reduce unnecessary spend across roughly 2,000 VPCs.
- Orchestrated a DNS migration that remediated 140,000+ DNS-related vulnerabilities without introducing downtime during cutover.
- Migrated 10,000+ ACM certificates from email validation to DNS validation so renewals became automatable and far less outage-prone.

## Outcome

The work cut annual cloud spend by seven figures, materially reduced security risk, and left the network in a state that was easier to operate and reason about at enterprise scale.
