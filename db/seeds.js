const seedDepartments = async (pool) => {
    const departments = [
      { name: "Sales" },
      { name: "Engineering" },
      { name: "Finance" },
      { name: "Legal" },
      { name: "Human Resources" },
      { name: "Marketing" },
      { name: "Customer Service" },
      { name: "Research and Development" },
      { name: "Purchasing" },
      { name: "Information Technology" },
    ];
  
    await pool.query(`INSERT INTO departments (name) VALUES ?`, [
      departments.map((dep) => [dep.name]),
    ]);
  };