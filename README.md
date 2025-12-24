# Angular Calculator - MyAppCalc

A modern, responsive calculator application built using Angular with routing enabled, clean UI, and real-world input validation.
This project demonstrates Angular fundamentals, routing, UI design, and logical problem-solving.

## Project Overview

The Angular Calculator is a single-page application created using Angular CLI with routing enabled from the start.
The calculator is rendered via Angular Router, showcasing proper SPA (Single Page Application) architecture.

## Features
```

Operations : Addition, Subtraction, Multiplication, Division, Modulo (%) support

Decimal handling with validation (prevents multiple dots)

Backspace support

Clear (C) functionality

Operator validation (prevents invalid sequences like ++, *-)

Result state handling

Angular Routing implemented

Responsive & centered layout

Dark theme calculator UI
```

Software & Tools Used

```
##Tool	      ##Purpose
Node.js	      JavaScript runtime
Angular CLI	  Project scaffolding & build
Angular       Application framework
TypeScript	  Strongly-typed JavaScript
HTML5	      Markup
CSS3	      Styling
Bootstrap 5	  Layout & utilities
VS Code	      Code editor
Git & GitHub  Version control
```

## Project Setup Commands

### Angular project created with routing enabled
```
ng new myappcalc --routing
```

### Calculator component generated
```
ng g c calculator
```

### Routing Implementation
Routing is implemented using Angular Router.

Key routing concepts used:
```

RouterModule

RouterOutlet
```

### Default route configuration


```
export const routes: Routes = [
    {path: '', component: CalculatorComponent, pathMatch:'full'},
];


@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)
```

### Router outlet used in root template:
```
<router-outlet></router-outlet>
```

### Libraries & Frameworks
```
@angular/core

@angular/common

@angular/forms (Template-Driven Forms)

@angular/router

Bootstrap 5
```
### Installed via:
```
npm install bootstrap
```


### Skills & Concepts

#### Angular

- Standalone Components
- Angular Routing
- RouterOutlet
- Template-Driven Forms (TDF)
- Two-way Data Binding ([(ngModel)])
- Structural Directives (*ngFor)
- Event Binding ((click))
- ViewChild & ElementRef

#### TypeScript / JavaScript
- Token-based parsing using Regex
- Input validation logic
- Error handling with try/catch
- Expression evaluation
- Conditional flow control

#### UI / UX
- Button interaction states (hover / active / disabled)
- Dynamic font resizing
- Dark theme design

### Project Structure
```
src/
│
├── app/
│   ├── calculator/
│   │   ├── calculator.ts
│   │   ├── calculator.html
│   │   ├── calculator.css
│   │   └── calculator.spec.ts
│   │
│   ├── app.ts
│   ├── app.html
│   └── app.routes.ts
│
└── styles.css
```

### How to Run the Project
#### Install dependencies
```
npm install
```
#### Start development server
```
ng serve
```
#### Open in browser
```
http://localhost:4200
```
