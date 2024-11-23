function Button({ value }) {
    return (
      <button className="btn text-xl font-semibold bg-red-600 hover:bg-red-400 px-6 py-3 rounded-lg">
        {value}
      </button>
    );
  }
  
  export default Button;
  