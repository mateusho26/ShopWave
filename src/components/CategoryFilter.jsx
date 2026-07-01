function CategoryFilter({ category, setCategory }) {
  return (
    <div className="filter-container">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">Todas as categorias</option>
        <option value="men's clothing">Masculino</option>
        <option value="women's clothing">Feminino</option>
        <option value="electronics">Eletrônicos</option>
        <option value="jewelery">Joias</option>
      </select>
    </div>
  );
}

export default CategoryFilter;