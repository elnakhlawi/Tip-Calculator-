

# 💰 Tip Calculator (React Practice)

A simple yet functional Tip Calculator built with **React.js**. This project was created as a practical exercise to master React state management and component communication.

## 🎯 Purpose of this Project

The main goal of this exercise was to practice:

* **State Management:** Using the `useState` hook to handle user inputs and real-time calculations.
* **Props Handling:** Passing data and functions from a parent component to child components to maintain a clean and modular structure.
* **Logic Implementation:** Executing a multi-step mathematical formula based on user interaction.

---

## ⚙️ How it Works

The calculator determines the tip based on the average satisfaction level of two people:

1. The user enters the **Bill Amount**.
2. The user selects **their satisfaction percentage** (e.g., 0%, 5%, 10%, 20%).
3. The user selects **their friend's satisfaction percentage**.
4. The app calculates the **average percentage**, applies it to the bill, and displays the total.

### The Calculation Logic

To ensure accuracy, the app follows this mathematical order:


---

## 🛠️ Technical Implementation

* **Lifting State Up:** All critical states (bill, percentages) are managed in the parent component and shared via props.
* **Modular Components:** The UI is split into smaller, reusable pieces (Input, Select, Output).
* **Derived State:** Instead of creating extra states for the results, calculations are performed directly during rendering for better performance.

## 🧠 Challenges & Solutions

The main challenge was **ensuring the correct order of operations** in the calculation logic. I had to ensure that the percentages were averaged correctly and treated as numbers (not strings) before calculating the final tip amount. Solving this helped me better understand data type handling in JavaScript.

---

## 🚀 Future Roadmap

Since this version focuses on core logic, I plan to:

* [ ] Add a **Reset** button to clear all inputs.
* [ ] Style the UI using **Tailwind CSS** or **CSS Modules**.
* [ ] Make the design **Responsive** for mobile users.

## 📦 Installation & Setup

1. Clone the repository:
```bash
git clone [your-repo-link]

```


2. Install dependencies:
```bash
npm install

```


3. Run the app:
```bash
npm start

```

