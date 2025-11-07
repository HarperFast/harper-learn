# Guest Episode: Nathan Heskew on the OAuth Plugin

**Duration:** ~12-15 minutes • **Difficulty:** Intermediate • **Format:** Interview/Demo

---

## Overview

Nathan Heskew walks us through Harper's OAuth plugin implementation, covering authentication flows, security considerations, and real-world integration patterns. Learn how to implement secure authentication in your Harper applications and extend the OAuth plugin for custom providers.

**What we'll cover:**
- OAuth 2.0 fundamentals in the context of Harper
- OAuth plugin architecture and implementation
- Supporting multiple OAuth providers
- Security best practices and common pitfalls
- Custom provider integration
- Session management and token handling

---

## Talk Track

**[0:00-0:30] Introduction**
- Introducing Nathan Heskew
- His work on the OAuth plugin
- Why authentication matters

**[0:30-2:30] OAuth Fundamentals**
- Quick OAuth 2.0 primer
- Why OAuth for Harper applications
- Common authentication patterns
- Harper's approach to auth

**[2:30-5:30] OAuth Plugin Architecture**
- Plugin structure walkthrough
- Authorization code flow implementation
- Token management and storage
- Session handling
- Refresh token logic

**[5:30-9:00] Multi-Provider Support**
- Supporting Google, GitHub, Microsoft, etc.
- Provider configuration and abstraction
- Handling provider-specific quirks
- Adding custom OAuth providers

**[9:00-11:30] Security & Best Practices**
- PKCE (Proof Key for Code Exchange)
- State parameter and CSRF protection
- Token storage security
- Common security pitfalls to avoid

**[11:30-15:00] Real-World Integration**
- Live demo: Implementing OAuth login
- User profile management
- Role-based access control integration
- Testing authentication flows
- Q&A

---

## Key Learning Outcome

✓ **Implement secure OAuth authentication in Harper applications** — Learn to configure and extend Harper's OAuth plugin for production-ready authentication with multiple providers.

---

## Guest Bio

**Nathan Heskew** is a software engineer at Harper who developed the OAuth plugin. He specializes in authentication systems, security, and developer experience.

---

## Resources & Links

**Related Documentation:**
- [Harper OAuth Plugin](https://github.com/HarperDB/oauth-plugin)
- [OAuth 2.0 Specification](https://oauth.net/2/)
- [PKCE RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)

**Example Integrations:**
- Google OAuth setup
- GitHub OAuth setup
- Microsoft Azure AD setup
- Custom provider example

---

## Prerequisites

- Basic understanding of OAuth 2.0 concepts
- Familiarity with Harper applications
- Understanding of web authentication flows
- Harper instance running locally

---

## Notes

- Format: Tutorial-style walkthrough with live coding
- Recording location: Remote/Studio TBD
- Target release: Q1 2025
- Include accompanying code repository with examples
