# Component Migration Order

Prioritized order for migrating to the new repo.

## Wave 1: Foundations (required first)

1. Colors
2. Typography
3. Spacing
4. Grid

## Wave 2: Core Atoms

1. Button
2. Input
3. Link
4. Icon
5. Badge
6. Blockquote
7. Chip

## Wave 3: Core Molecules

1. Content
2. Fieldset
3. Message
4. Pagination
5. Card
6. Table
7. Details
8. Feedback

## Wave 4: Organisms

1. Header
2. Footer
3. Banner
4. Tabs (final parity + behavior polish)

## Migration rule per component

For each component, complete in this order:

1. Intake (Figma nodes + tokens + behavior)
2. Build base component
3. Add contract stories
4. Add lean docs
5. Validate behavior + accessibility
6. Run `npm run build-storybook`
