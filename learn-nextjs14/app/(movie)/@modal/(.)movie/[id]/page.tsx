import { Modal } from "./modal";

const MovieModal = async ({ params } : { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log("test");

  return (
    <Modal>{id}</Modal>
  );
};

export default MovieModal;
