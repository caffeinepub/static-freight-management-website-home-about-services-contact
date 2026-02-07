# Specification

## Summary
**Goal:** Fix the blank page by guaranteeing the React app mounts a valid element tree to `#root` via a stable entry module, without editing immutable frontend files.

**Planned changes:**
- Add a new frontend entry module that renders `<App />` and wraps it with `QueryClientProvider` and `InternetIdentityProvider` exactly once.
- Update `frontend/index.html` to import the new entry module instead of `frontend/src/main.tsx`.
- Ensure dev, build, and preview all render the existing header/nav and Home page with no user-facing text changes.

**User-visible outcome:** Running `pnpm run dev`, `pnpm run build`, or `pnpm run preview` shows the normal site UI (not a blank screen), even if `frontend/src/main.tsx` is empty.
