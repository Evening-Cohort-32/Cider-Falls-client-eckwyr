# Scenario: Move a guest to a different park area

**Given** a park visitor needs to move from one park area to another

**When** a park ranger can select a visitor name from a _Visitor__ dropdown element at the bottom of the guest list

**And** selects a park area from a _Park Area_ dropdown

**And** clicks the "Move" button below both of the dropdowns

**Then** the selected visitor should be removed from their current area and added to the selected park area.

# Scenario: Guest list updates after a guest is moved

**Given** a guest has been moved to a different park area

**When** the guest list is displayed

**Then** the guest's name should be displayed with the new park area

**And** the number of guests displayed for each area should accurately reflect the change.
