export default function SingleImage({ photo }) {
  return (
    <div className='emoji'>
      <p>{photo?.symbol}</p>
    </div>
  );
}
