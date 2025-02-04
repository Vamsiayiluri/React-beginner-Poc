type inputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = (props: inputProps) => {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={(event) => props.handleChange(event)}
      ></input>
    </div>
  );
};
