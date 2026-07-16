# Gather SF landing page

A responsive prototype for a San Francisco food-ordering concept. Customers browse meals from three fictional restaurant partners and collect their combined order from one central pickup point.

## Requirements

- Node.js 22 or newer
- pnpm 11 (the repository pins its package-manager version)

If pnpm is not installed globally, use Corepack:

```bash
corepack enable
```

## Local development

Install dependencies:

```bash
pnpm install
```

Start the Vite development server:

```bash
pnpm dev
```

Then open the local URL printed by Vite.

## Verification

Run the automated tests:

```bash
pnpm test
```

Run lint checks:

```bash
pnpm lint
```

Create a production build:

```bash
pnpm build
```

The generated production assets are written to `dist/`.

## Prototype scope

This repository contains a frontend-only concept. Restaurant names, menus, and pickup details are fictional and do not represent confirmed partnerships or a finalized location. The prototype intentionally excludes ordering transactions, checkout, payments, accounts, persistence, and restaurant integrations.
