# 🎯 Frontend Code Improvements (TypeScript/React)

---

## 🔴 Phase 1: Critical — Type Safety & Crashes
> Must Fix Immediately

---

### 1. Fix Blog type mismatch — `id` should be `number` not `string`
- **File:** `src/types/blog.ts`, line 2
- **Issue:** Backend sends `id: int`, frontend expects `id: string`
- **Risk:** Type errors, runtime bugs when using ID as number
- **Fix:** Change `id: string` to `id: number`

---

### 2. Create Error Boundary component to catch React errors
- **Issue:** Any component error crashes entire app
- **Risk:** Total app failure on single component error
- **Solution:** Create `src/components/error-boundary.tsx` component
- **Benefit:** Graceful error handling, fallback UI

---

### 3. Create centralized HTTP/API client service
- **Issue:** `useFetch` and `useMutation` duplicate fetch logic
- **Risk:** Inconsistent error handling, no auth injection point
- **Solution:** Create `src/services/api.ts` with centralized fetch wrapper
- **Benefit:** Single place to add auth tokens, interceptors, error handling

---

### 4. Add request/response interceptors to API client
- **Issue:** No central place to inject auth tokens or handle global errors
- **Risk:** Auth tokens not sent with requests, duplicated error handling
- **Solution:** Add interceptor functions to API client
- **Features:**
  - Inject `Authorization` header
  - Handle `401` errors globally
  - Handle network errors globally

---

## 🟠 Phase 2: High Priority — Maintainability & Reusability

---

### 5. Make `useMutation` hook generic with `<T>`
- **File:** `src/hooks/useMutation.ts`, line 14
- **Issue:** Currently hardcoded to `Omit<Blog, "id">` — not reusable for other types
- **Risk:** Can't reuse for categories, comments, etc.
- **Fix:** Change signature to `async function mutate<T>(mode, url, data: T)`

---

### 6. Create URL builder utility function
- **Issue:** String concatenation used everywhere: `API_URL + "/blogs"`, `"/posts" + "/" + id`
- **Risk:** Bug-prone, inconsistent URL building
- **Solution:** Create `src/utils/url-builder.ts` with functions like `buildBlogUrl(id?)`, `buildPostUrl(id)`

---

### 7. Extract hardcoded form fields to configuration object
- **File:** `src/components/blog-form.tsx`, line 33
- **Issue:** `const fields = ["title", "description", "content"]` — magic array
- **Risk:** If `Blog` type changes, form breaks silently
- **Solution:** Create typed field config object
- **Implementation:**
  ```typescript
  const BLOG_FORM_FIELDS = {
    title: { label: "Title", required: true, maxLength: 200 },
    description: { label: "Description", required: false, maxLength: 5000 },
    content: { label: "Content", required: true }
  } as const;
  ```

---

### 8. Extract API constants to centralized constants file
- **Issue:** `API_URL` imported in multiple files (`BlogForm`, `useBlogs`, `useMutation`, etc.)
- **Risk:** Hard to change, duplicated imports
- **Solution:** Create `src/lib/api-config.ts`
- **Contents:** `API_URL`, API endpoints, retry config, timeouts

---

### 9. Add request cancellation with `AbortController`
- **Issue:** If user navigates away, fetch requests continue
- **Risk:** Memory leaks, state updates on unmounted components
- **Solution:** Update `useFetch` and `useMutation` to use `AbortController`
- **Implementation:** Abort requests in cleanup/`useEffect` return

---

### 10. Add request retry logic with exponential backoff
- **Issue:** Network failures cause immediate error
- **Risk:** Poor UX on flaky networks
- **Solution:** Add retry wrapper to fetch calls
- **Config:** `maxRetries: 3`, `backoffMultiplier: 2`, `initialDelay: 1000ms`

---

### 11. Add request timeout handling
- **Issue:** Requests can hang indefinitely
- **Risk:** Poor UX, stuck loading states
- **Solution:** Wrap fetch with timeout utility
- **Default:** 30-second timeout

---

### 12. Separate fetch logic from `BlogForm` component
- **Issue:** Form component handles validation, submission, error display, and loading
- **Risk:** Too many responsibilities, hard to test
- **Solution:** Extract submission logic to custom hook `useBlogMutation()`

---

### 13. Add typed error responses
- **Issue:** Errors treated as generic `Error` type
- **Risk:** Can't distinguish different error types
- **Solution:** Create error type interfaces:
  ```typescript
  interface ApiErrorResponse {
    message: string;
    statusCode: number;
    code?: string;
    details?: Record<string, unknown>;
  }
  ```

---

### 14. Add form submission error display with better UX
- **Issue:** Error just shown, no field-level error highlighting
- **Risk:** User doesn't know which field has an issue
- **Solution:** Parse validation errors, map to fields using React Hook Form's `setError`

---

## 🟡 Phase 3: Medium Priority — Performance & UX

---

### 15. Add loading skeleton component for better UX
- **Issue:** Current loading state is just a `loading` boolean
- **Risk:** Poor user experience during data load
- **Solution:** Create `src/components/blog-skeleton.tsx`
- **Benefit:** Shows expected layout while loading

---

### 16. Add pagination to blogs list
- **Issue:** `GetEveryBlogs` fetches ALL blogs (no limit)
- **Risk:** Performance degrades with many blogs
- **Solution:** Add pagination to `useBlogs()` hook
- **Implementation:** Add `page` and `limit` parameters

---

### 17. Add search/filter functionality to blogs list
- **Issue:** No way to find a specific blog
- **Solution:** Add search input to posts page

---

### 18. Add loading state to Blog card component
- **Issue:** No skeleton while individual blog is loading
- **Solution:** Create a variant of the `Card` component for loading state

---

### 19. Implement response caching strategy
- **Issue:** Every page load fetches fresh data
- **Risk:** Unnecessary network requests
- **Solution:** Add simple caching to `useFetch` (or use React Query/SWR)
- **Implementation:** Cache responses with TTL (e.g., 5 minutes)

---

### 20. Add debouncing to search input
- **Issue:** Search fires on every keystroke
- **Risk:** Too many API requests
- **Solution:** Add `useDebounce` hook to search input
- **Delay:** 300–500ms

---

## 🟢 Phase 4: Low Priority — Code Quality

---

### 21. Add React Query or SWR for data fetching
- **Issue:** Custom hooks reinvent the wheel for data fetching
- **Benefit:** Built-in caching, background refetch, offline support, devtools
- **Note:** Can be added incrementally

---

### 22. Extract magic values to constants
- **Issue:** Magic numbers/strings scattered throughout
- **Examples:** `h-36`, `line-clamp-3`, form field max lengths
- **Solution:** Create `src/constants/ui.ts` and `src/constants/validation.ts`

---

### 23. Add prop types validation using TypeScript interfaces
- **Issue:** Component props sometimes only partially typed
- **Solution:** Ensure all component props have interfaces

---

### 24. Add JSDoc comments to custom hooks
- **Issue:** Hooks behavior not documented
- **Solution:** Add JSDoc to `useFetch`, `useMutation`, `useBlogs`

---

### 25. Add Storybook for component documentation
- **Issue:** No isolated component development/documentation
- **Solution:** Add Storybook setup for `Card`, `BlogForm`, etc.

---

## 📊 Priority Summary

| Symbol | Priority | Focus |
|--------|----------|-------|
| 🔴 | Critical | Security, crashes, bugs |
| 🟠 | High | Architecture, maintainability |
| 🟡 | Medium | Performance, observability |
| 🟢 | Low | Nice-to-have, future improvements |
