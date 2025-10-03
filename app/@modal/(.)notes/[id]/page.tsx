import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import Modal from "@/components/Modal/Modal";

export default  function NotePreview() {

  return (
    <Modal >
      <NoteDetailsClient/>
    </Modal>
  );
}
