export async function createCategory(category) {
  try {
    const response = await fetch("http://localhost:4000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    if (!response.ok) {
      throw new Error("Failed to create category");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating category:", error);
    return null;
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch("http://localhost:4000/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function updateCategory(id, category) {
  try {
    const response = await fetch(`http://localhost:4000/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    if (!response.ok) {
      throw new Error("Failed to update category");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating category:", error);
    return null;
  }
}

export async function deleteCategory(id) {
    try {
      const response = await fetch(`http://localhost:4000/categories/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete category');
      }
      return true;
    } catch (error) {
      console.error('Error deleting category:', error);
      return false;
    }
  }
  