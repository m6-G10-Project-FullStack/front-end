import { Footer } from "../src/components/Footer";
import { Button } from "../src/components/Button";

export default function Home() {
  return (
    <>
      <Button
        bg_color="gray-9"
        b_color="gray-1"
        h_b_color="gray-1"
        t_color="gray-1"
        h_bg_color="gray-1"
        h_t_color="gray-9"
        variant="small"
        clickFunction={() => console.log("teste")}
      >
        Teste
      </Button>
      <Footer />
    </>
  );
}
