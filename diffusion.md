---
Title: Diffusion Simulation
---

## Diffusion Simulation

A diffusion simulation reconstructed and improved for the Kennett High School Science Department, as the old flash program couldn't be run.

<br>

---

[View the Diffusion Simulation](https://eaglesoftworks.github.io/Diffusion/ "Molecular Diffusion Simulation")

---

<br>

The Science Department wanted the new Diffusion Simulation to function like before. 
To ensure the program would run on computers for a long time (unlike the flash program before), the Diffusion Sim was made as a webpage using `HTML`, `CSS` and `JavaScript`.

> Add picture of original flash program
>*The original Flash program did not look too complicated*

The original flash program did not look too complicated. 
It basically had green particles that bounced around a box with a divider in the middle.
The point of the simulation was to demonstrate the random movement of particles.
After a certain amount of time, the particles would be equal on each side of the divider, despite their random motion.

> Add picture of changes from email
>**

The Science Department also wanted a few extra changes, since the Diffusion Sim was being remade from scratch. 

The new requirements were:
* A timer built into the page
* Larger molecules that can't cross the divider
* Sliders for adjusting the size of the molecules 
* Active Transport to force molecules back to the starting side
* A button to enable/disable Active Transport
* Buttons to adjust the temperature

After recreating the old Diffusion Sim, these requirements weren't too tricky.

* Canvas for drawing

* Classes for molecules

* Timer for moving everything