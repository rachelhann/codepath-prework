# WEB103 Prework — *Creatorverse*

**Submitted by:** *Rachel Hanna*

---

### 📙 About the App

**Creatorverse** is a full-stack web app where you can discover, add, edit, and delete your favorite content creators. Each creator card displays their name, description, social media links (YouTube, X, Instagram), and an optional profile image — all powered by a live Supabase database.

**Time spent:** ~15 hours

---

## 🚀 Getting Started

```bash
git clone https://github.com/rachelhann/codepath-prework.git
cd folder-name
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✅ Required Features

The following **required** functionality is completed:

- [✅] **A logical component structure in React is used to create the frontend of the app**
- [✅] **At least five content creators are displayed on the homepage of the app**
- [✅] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [✅] **API calls use the async/await design pattern via Axios or fetch()**
- [✅] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [✅] **Each content creator has their own unique URL**
- [✅] **The user can edit a content creator to change their name, url, or description**
- [✅] **The user can delete a content creator**
- [✅] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

---

## ✅ Optional Features

- [✅] PicoCSS is used to style HTML elements
- [✅] The content creator items are displayed in a creative format, like cards instead of a list
- [✅] An image of each content creator is shown on their content creator card

---

## ✅ Additional Features

- [✅] Custom delete confirmation modal with blurred overlay — no accidental deletions!
- [✅] Social media links (YouTube, X, Instagram) displayed as clickable icons on each card
- [✅] Portfolio-style hero banner with a radial teal glow effect
- [✅] *Space Grotesk* custom font applied to creator names and headings
- [✅] Smart URL handling — accepts both full URLs and short handles for social links

---

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img width="1264" height="560" alt="GIF Walkthrough" src="https://github.com/user-attachments/assets/4bf5ac28-df4e-4f3a-a274-2b7694620b64" />

GIF created with EzGIF

---

## Notes

Setting up React Router required some restructuring — the project initially attempted to use React Router's framework mode (with a Vite plugin) before realizing the prework required library mode with `useRoutes` instead.

Managing PicoCSS's default styles conflicting with custom CSS was another hurdle, requiring `!important` overrides in several places to keep button styling consistent throughout the app. A shared `toUrl` utility was also extracted to avoid duplicating URL-building logic across components.

---
## License

Copyright [2026] Rachel Hanna

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
