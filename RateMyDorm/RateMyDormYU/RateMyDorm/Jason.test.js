import { describe, it, expect } from "vitest";

import {search} from "Jason.js";

describe("search function", () => {
  it("should show only items that match the search filter", () => {
      // Set input filter
      const searchInput = document.getElementById("search");
      searchInput.value = "Oxford"; // Simulate search for "Oxford"

      // Call search function
      search();

      // Get all the residence items
      const items = document.querySelectorAll('.residence');

      // Test that only the matching item is visible
      expect(items[0].style.display).toBe(''); // "University of Oxford" should be visible
      expect(items[1].style.display).toBe('none'); // "Harvard University" should be hidden
      expect(items[2].style.display).toBe('none'); // "Stanford University" should be hidden
      expect(items[3].style.display).toBe('none'); // "University of Cambridge" should be hidden
  });

  it("should show all items if no search term is provided", () => {
      // Simulate no filter (empty input)
      const searchInput = document.getElementById("search");
      searchInput.value = "";

      // Call search function
      search();

      // Get all the residence items
      const items = document.querySelectorAll('.residence');

      // Test that all items are visible
      items.forEach(item => {
          expect(item.style.display).toBe('');
      });
  });
});
