# 🎯 Frontend Tasks (TypeScript/React)

---

## 📊 Tasks Overview Table

| Priority | Feature | Dependencies | Blocking |
|----------|---------|-------------|---------|
| 🔴 CRITICAL | Login/Signup Pages & Forms | Requires backend auth endpoints | Blocks all protected features |
| 🔴 CRITICAL | Auth Context/State Management | Requires login endpoints | Blocks protected routes |
| 🔴 CRITICAL | Protected Route Wrapper | Requires auth context | Blocks authenticated pages |
| 🔴 CRITICAL | JWT Token Storage & Management | Requires backend auth | Blocks API requests |
| 🟠 HIGH | Wire Blog Form to Create API | Requires protected POST endpoint | Can't create posts |
| 🟠 HIGH | Delete Post Functionality | Requires protected DELETE endpoint | Can't manage posts |
| 🟠 HIGH | Edit Post Functionality | Requires protected PUT endpoint | Can't manage posts |
| 🟠 HIGH | User Profile Page | Requires user data from backend | Blocks user features |
| 🟡 MEDIUM | Navigation Auth State (Login/Logout buttons) | Requires auth context | UX improvement |
| 🟡 MEDIUM | Create Post Page Layout | Requires blog form wiring | Blocks new-post route |
| 🟡 MEDIUM | Post Dashboard (My Posts) | Requires user posts endpoint | Blocks dashboard |
| 🟢 LOW | Categories Selector UI | Requires backend categories | Blocks category selection |
| 🟢 LOW | Comments Component | Requires backend comments API | Blocks comments |
| 🟢 LOW | Likes Button UI | Requires backend likes API | Blocks likes |
| 🟢 LOW | Follow Button | Requires backend follow API | Blocks follow feature |

---

## 🔴 Phase 1: Critical — Security & Authentication Foundation *(Frontend)*

---

### 1. Create Auth Context/Provider for global auth state

---

### 2. Create Login Page component
- Include form & validation

---

### 3. Create Signup/Register Page component
- Include form & validation

---

### 4. Implement JWT token storage & retrieval
- Use `localStorage` or cookies

---

### 5. Create Protected Route Wrapper component

---

### 6. Add Login/Logout buttons to Navigation (Sidebar)

---

### 7. Create User Profile Page skeleton

---

## 🟡 Phase 3: Core Blog Functionality *(Frontend)*

---

### 8. Wire `BlogForm` component to `POST /blogs` endpoint
- Requires authentication

---

### 9. Create/Navigate to Create New Post page
- **Route:** `/new-post`

---

### 10. Implement Edit Post functionality
- Connects to `PUT` endpoint

---

### 11. Implement Delete Post functionality
- Include confirmation modal

---

### 12. Create "My Posts" Dashboard page for authenticated users

---

## 🟢 Phase 4: Security Hardening *(Frontend)*

---

### 13. Add error handling for auth failures & token expiration

---

### 14. Implement auto-logout on token expiration

---

## 💜 Phase 5: Enhancement Features *(Frontend)*

---

### 15. Add Category selector to Blog Form

---

### 16. Add Category filter to Blog listing

---

### 17. Implement Comments Component

---

### 18. Implement Likes Button

---

### 19. Implement Follow Button

---

## 🎯 Recommended Agent Implementation Order

| Agent | Focus | Tasks |
|-------|-------|-------|
| Agent 1 | Backend — Foundation & Security | Tasks 1–10 |
| Agent 2 | Frontend — Auth UI & Protection | Tasks 11–17 |
| Agent 3 | Backend — Validation & Hardening | Tasks 18–19, 25–29 |
| Agent 4 | Frontend — Core Functionality | Tasks 20–24 |
| Agent 5+ | Either — Enhancements | Tasks 30+ |

---

## 📊 Priority Summary

| Symbol | Priority | Focus |
|--------|----------|-------|
| 🔴 | Critical | Security, crashes, bugs |
| 🟠 | High | Architecture, maintainability |
| 🟡 | Medium | Performance, observability |
| 🟢 | Low | Nice-to-have, future improvements |
| 💜 | Enhancement | Post-MVP features |
