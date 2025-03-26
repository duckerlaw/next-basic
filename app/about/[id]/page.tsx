const AboutDetailsPage = async ({params}: {params: {id: number}}) => {
    const {id} = await params;
    console.log(id);
  return (
    <div>AboutDetailsPage</div>
  )
}
export default AboutDetailsPage