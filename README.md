# Just Divide

A React + TypeScript recreation of **Just Divide – Kid Mode**, a math-based puzzle game designed to help children develop intuition for division, factors, multiples, and pattern recognition through short strategic turns.

The project aims to faithfully reproduce the gameplay mechanics and visual design outlined in the provided specification while maintaining a clean, maintainable, and responsive codebase.

## Current Progress

The foundational gameplay systems have been implemented and are functional.

### Gameplay Systems

* 4×4 game board
* Random tile generation
* Upcoming tile queue
* Tile placement system
* Equality-based merges
* Division-based merges
* Chain merge resolution
* Score tracking
* Level progression
* KEEP slot functionality
* TRASH slot functionality

### User Interface

* Responsive layout foundation
* Game board rendering
* Header section
* Action panel
* Queue display
* Score and level display

## Architecture

The project is structured around a centralized game state model and reusable React components. Core gameplay rules are isolated from UI components to keep game logic testable and maintainable.

Current areas of separation include:

* Game state management
* Tile generation
* Queue management
* Merge resolution logic
* Board rendering
* Action panel interactions

## Remaining Work

### Core Features

* Undo system
* Game over detection
* Best score persistence
* Session timer
* Hint system
* Difficulty modes
* Level-based progression tuning

### Interactions

* Drag-and-drop tile placement
* KEEP slot drag-and-drop support
* TRASH slot drag-and-drop support
* Touch-friendly controls
* Keyboard shortcuts

### Visual Implementation

* Integration of supplied assets
* Final game board styling
* Badge implementation
* Cat character placement
* Responsive scaling refinements
* Background artwork implementation
* Mobile layout optimization

### Polish

* Animations and transitions
* Merge feedback effects
* Interaction feedback
* Additional accessibility improvements

## Technical Stack

* React
* TypeScript
* Vite
* HTML5
* CSS3

## Project Status

**In Development**

The core gameplay loop has been implemented and is currently being expanded with supporting systems, interaction mechanics, and visual polish to achieve full feature parity with the original specification.
