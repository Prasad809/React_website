import Button from '@mui/material/Button';

export default function ButtonThemes({clr,typ,name,disabled,funcname,style,...props}) {
  return (
      <Button variant={clr} type={typ} disabled={disabled} onClick={funcname} {...props} style={style}>{name}</Button>
  );
}
