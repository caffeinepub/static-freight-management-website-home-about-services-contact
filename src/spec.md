# Specification

## Summary
**Goal:** Provide an app-wide maintenance/disabled mode that replaces the entire public marketing UI with a single offline screen as a rollback substitute.

**Planned changes:**
- Add a global “site disabled / maintenance mode” gate that, when enabled, prevents all existing routes/layout (header/footer/pages) from rendering.
- Render a single standalone offline/maintenance screen with clear messaging and no internal navigation links when the gate is enabled.
- Implement the gate as a simple configuration toggle located in `frontend/src/entry.tsx` (or a non-immutable file imported by it), optionally using a Vite environment variable.

**User-visible outcome:** When maintenance mode is enabled, visiting any route shows only an offline/unpublished message and the rest of the site does not load; when disabled, the site behaves exactly as it does today.
