type FormStepsProps = {
  isProfileData?: boolean;
};

const FormSteps = ({ isProfileData = false }: FormStepsProps) => {
  return (
    <div className="flex mx-auto w-60 gap-3 h-3">
      <span className="bg-blue-800 rounded-full w-full h-full" />
      <span
        className={`rounded-full w-full h-full ${
          isProfileData ? "bg-blue-800" : "bg-blue-100"
        }`}
      />
    </div>
  );
};

export default FormSteps;
