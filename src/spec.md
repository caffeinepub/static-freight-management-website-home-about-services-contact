# Specification

## Summary
**Goal:** Reset scroll position to the top whenever navigating between internal routes.

**Planned changes:**
- Add a route-change scroll restoration behavior so that on every internal navigation, the window scroll position is set to (0, 0).
- Ensure the behavior applies uniformly to all internal navigation entry points (header nav, footer links, and in-page CTAs) across existing routes.

**User-visible outcome:** When clicking any internal link to navigate to another page (/, /about, /services, /tracking, /contact), the destination page opens at the top instead of preserving the previous scroll position.
