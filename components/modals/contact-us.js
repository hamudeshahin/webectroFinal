import { useState } from "react";
// components
import {
  Modal,
  Text,
  Loading,
  Input,
  Button,
  Grid,
  Textarea,
} from "@nextui-org/react";
import { IoAt, IoSend } from "react-icons/io5";
import { HiOutlineMail, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import Alert from "../utils/alert";
import { toast } from "react-toastify";
// services
import axios from "axios";

function ContactUs({ visible, closeHandler }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErros] = useState(null);

  const validateData = () => {
    let errors = [];
    if (!email || email.split() === "")
      errors.push("Lütfen e-postanızı yazınız");
    if (!message || message.split() === "")
      errors.push("Lütfen göndereceğiniz messajı yazınız");
    if (!name || name.split() === "") errors.push("Lütfen isminizi yazınız");
    if (!lastName || lastName.split() === "")
      errors.push("Lütfen soyadınızı yazınız");
    if (!subject || subject.split() === "")
      errors.push("Lütfen e-posta konu yazınız");

    if (!email.includes("@")) errors.push("Lütfen geçerli bir e-posta yazınız");

    if (errors.length === 0) return true;

    return {
      status: false,
      errors,
    };
  };

  const sendMail = async () => {
    const validate = validateData();
    if (validate?.status === false) {
      setErros(validate.errors);
    }
    errors && setErros(null);
    // start api
    setLoading(true);

    const { data: res } = await axios.post("/api/email", {
      email,
      firstName: name,
      lastName,
      message,
      subject,
    });
    if (res?.status === true) {
      toast(
        "Mesajınız başarıyla gönderildi. En yakın zamanda size dönüş yaparız!",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          className: "custom__notify-toast",
          type: "success",
        }
      );
      closeHandler();
    } else {
      setErros(res?.message || "Error !");
    }

    setLoading(false);
  };

  return (
    <Modal
      preventClose={loading}
      closeButton
      blur
      open={visible}
      onClose={() => {
        console.log("CLose Button");
        if (loading) {
          return;
        }
        closeHandler();
      }}
      width={"70%"}
    >
      <Modal.Header>
        <Text id="modal-title" sm="false" size={18}>
          Welcome to
          <Text b size={18} sm="false">
            NextUI
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Grid.Container gap={1}>
          {errors && <Alert type="error" description={errors} />}
          <Grid xs={12}>
            <Input
              clearable
              bordered
              fullWidth
              color="secondary"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-postanızı buraya giriniz"
              contentLeft={<HiOutlineMail />}
            />
          </Grid>
          <Grid xs={12}>
            <Input
              clearable
              bordered
              fullWidth
              color="secondary"
              size="lg"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="E-posta konu"
              contentLeft={<HiOutlineQuestionMarkCircle />}
            />
          </Grid>
          <Grid xs={6}>
            <Input
              clearable
              bordered
              fullWidth
              color="secondary"
              size="lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="İsminiz"
              contentLeft={<IoAt />}
            />
          </Grid>
          <Grid xs={6}>
            <Input
              clearable
              bordered
              fullWidth
              color="secondary"
              size="lg"
              placeholder="Soyadınız"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              contentLeft={<IoAt />}
            />
          </Grid>
          <Grid xs={12}>
            <Textarea
              bordered
              fullWidth
              color="secondary"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mesajınızı buraya yazınız"
              rows={4}
            />
          </Grid>
        </Grid.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          auto
          flat
          color="error"
          disabled={loading}
          onClick={closeHandler}
        >
          Kapat
        </Button>
        <Button
          css={{ width: 120 }}
          auto
          onClick={sendMail}
          iconRight={!loading && <IoSend />}
          disabled={
            !message.split() ||
            message === "" ||
            !email.split() ||
            email === "" ||
            !name.split() ||
            name === "" ||
            !lastName.split() ||
            lastName === "" ||
            !subject.split() ||
            subject === ""
          }
        >
          {loading ? (
            <Loading type="points" color="white" size="sm" />
          ) : (
            "Gönder"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactUs;
