type BlueButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const BlueButton = ({ children, className, ...props }: BlueButtonProps) => {
  return (
    <button
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </button>
  );
};

export default BlueButton;
