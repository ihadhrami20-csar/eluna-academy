# Al-Qalam Tuition Website - Testing Guide

## 🧪 Manual Testing Checklist

### Test 1: PopularCourses Filter Functionality
**Location:** Scroll to "Our Most Popular Programs" section

#### Test Case 1.1: All Programs Filter
- [ ] Click "All Programs" button
- [ ] **Expected:** All 4 courses should display
  - Learn Tajweed Step by Step
  - Arabic for Beginners
  - Master Quranic Vocabulary
  - Interactive Quran Class for Kids

#### Test Case 1.2: Quran Filter
- [ ] Click "Quran" button
- [ ] **Expected:** Only 1 course displays:
  - Master Quranic Vocabulary
- [ ] Button should be highlighted in ocean-blue

#### Test Case 1.3: Arabic Filter
- [ ] Click "Arabic" button
- [ ] **Expected:** Only 1 course displays:
  - Arabic for Beginners
- [ ] Button should be highlighted in ocean-blue

#### Test Case 1.4: Tajweed Filter
- [ ] Click "Tajweed" button
- [ ] **Expected:** Only 1 course displays:
  - Learn Tajweed Step by Step (with SALE tag)
- [ ] Button should be highlighted in ocean-blue

#### Test Case 1.5: Kids Filter
- [ ] Click "Kids" button
- [ ] **Expected:** Only 1 course displays:
  - Interactive Quran Class for Kids
- [ ] Button should be highlighted in ocean-blue

#### Test Case 1.6: Filter Toggle
- [ ] Click between different filters rapidly
- [ ] **Expected:** Courses update smoothly without lag
- [ ] Active button styling updates correctly

---

### Test 2: SignUpModal Form Submission
**Location:** Click "Sign Up" button in header or "Join Now" in hero section

#### Test Case 2.1: Modal Opens
- [ ] Click "Sign Up" button
- [ ] **Expected:** 
  - Modal appears with fade-in animation
  - Background becomes semi-transparent dark overlay
  - Modal slides up from bottom
  - Close button (X) is visible in top-right

#### Test Case 2.2: Empty Form Validation
- [ ] Modal is open
- [ ] Click "Create Account" without filling any fields
- [ ] **Expected:** Alert message appears: "Please fill in all fields"

#### Test Case 2.3: Invalid Email Validation
- [ ] Enter name: "Ahmed Hassan"
- [ ] Enter email: "invalid-email" (without @)
- [ ] Click "Create Account"
- [ ] **Expected:** Alert message appears: "Please enter a valid email address"

#### Test Case 2.4: Valid Submission
- [ ] Enter name: "Ahmed Hassan"
- [ ] Enter email: "ahmed@example.com"
- [ ] Click "Create Account"
- [ ] **Expected:**
  - Button text changes to "Creating Account..."
  - Input fields become disabled (grayed out)
  - After ~1.5 seconds, success message displays: "Welcome! Check your email for next steps."
  - Green checkmark icon appears
  - After 2 seconds, modal automatically closes
  - Form is reset for next use

#### Test Case 2.5: Modal Close Button
- [ ] Click "Sign Up" to open modal
- [ ] Click the X button in top-right
- [ ] **Expected:** Modal closes smoothly with fade-out animation

#### Test Case 2.6: Modal Close on Overlay Click
- [ ] Click "Sign Up" to open modal
- [ ] Click on the dark background (outside the modal)
- [ ] **Expected:** Modal closes smoothly

---

### Test 3: General Features Verification

#### Test Case 3.1: Header Scroll Effect
- [ ] Scroll to top of page (hero section)
- [ ] **Expected:** Header is transparent, "Al-Qalam Tuition" text is white
- [ ] Scroll down past hero section
- [ ] **Expected:** Header background becomes ocean-blue, shadow appears

#### Test Case 3.2: Mobile Responsiveness
- [ ] Open browser DevTools (F12)
- [ ] Toggle device toolbar (Ctrl+Shift+M)
- [ ] Set to iPhone 12 (375px width)
- [ ] **Expected:**
  - Logo and hamburger menu visible
  - Navigation hidden, hamburger menu shows
  - Click hamburger to toggle mobile menu
  - Sign Up button appears in mobile menu
  - Course grid shows 1 column

#### Test Case 3.3: Tablet Responsiveness
- [ ] Set DevTools to iPad (768px width)
- [ ] **Expected:**
  - Navigation hidden, hamburger menu shows
  - Course grid shows 2 columns

#### Test Case 3.4: Desktop Responsiveness
- [ ] Close DevTools or set to full width (1024px+)
- [ ] **Expected:**
  - Full navigation visible
  - Course grid shows 4 columns
  - Sign Up button visible in header

---

## 📊 Test Results Summary

| Test Case | Status | Notes |
|-----------|--------|-------|
| 1.1 - All Programs Filter | [ ] | |
| 1.2 - Quran Filter | [ ] | |
| 1.3 - Arabic Filter | [ ] | |
| 1.4 - Tajweed Filter | [ ] | |
| 1.5 - Kids Filter | [ ] | |
| 1.6 - Filter Toggle | [ ] | |
| 2.1 - Modal Opens | [ ] | |
| 2.2 - Empty Form Validation | [ ] | |
| 2.3 - Invalid Email Validation | [ ] | |
| 2.4 - Valid Submission | [ ] | |
| 2.5 - Modal Close Button | [ ] | |
| 2.6 - Modal Overlay Click | [ ] | |
| 3.1 - Header Scroll Effect | [ ] | |
| 3.2 - Mobile Responsiveness | [ ] | |
| 3.3 - Tablet Responsiveness | [ ] | |
| 3.4 - Desktop Responsiveness | [ ] | |

---

## 🐛 Bug Reporting Format

If you find any issues, please report:

**Bug:** [Brief description]
**Test Case:** [Which test failed]
**Steps to Reproduce:**
1. 
2. 
3. 

**Expected Result:** [What should happen]
**Actual Result:** [What actually happens]
**Screenshots:** [If applicable]

---

## ✅ Sign-Off

- [ ] All tests passed
- [ ] No bugs found
- [ ] Ready for deployment to Vercel
- [ ] Tested on mobile, tablet, and desktop

**Tested by:** [Your name]
**Date:** [Test date]
**Notes:** [Any additional notes]
