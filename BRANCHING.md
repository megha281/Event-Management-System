
# Event Management System
## Git Branching Strategy

### 1. Project Description
The Event Management System is a web application designed to manage events, registrations, and event schedules.

### 2. Development Team

- Developer 1: Event Management
- Developer 2: Event Registration
- Developer 3: Event Scheduling

### 3. Branching Strategy

We follow the Feature Branch Workflow.

- main: Contains stable and tested code.
- feature/events: Handles event creation and listing.
- feature/registration: Handles user event registration.
- feature/schedule: Handles event schedules.

### 4. Development Workflow

1. Each developer creates a separate feature branch from main.
2. Developers implement their assigned features.
3. Changes are committed using meaningful commit messages.
4. Completed features are merged into main.
5. Merge conflicts are resolved before completing merges.
6. The main branch is maintained as stable code.

### 5. Commit Message Convention

- feat: Add new functionality.
- fix: Fix bugs.
- docs: Update documentation.
- merge: Merge feature branches.
