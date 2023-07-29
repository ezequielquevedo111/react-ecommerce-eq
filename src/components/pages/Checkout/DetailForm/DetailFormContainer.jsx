import DetailForm from "./DetailForm";

const DetailFormContainer = ({ handleSubmit, handleChange, errors }) => {
  return (
    <DetailForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default DetailFormContainer;
