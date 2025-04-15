import { SafeAreaView, ScrollView } from "react-native";
import ProjectDetail from "../components/Product_Inner_Detail_Components/ProjectDetail";
import Delivery from "../components/Product_Inner_Detail_Components/Delivery";
import Specifications from "../components/Product_Inner_Detail_Components/Specifications";
import Quantity from "../components/Product_Inner_Detail_Components/Quantity";
import Rating from "../components/Product_Inner_Detail_Components/Rating";
import Mostpopular from "../components/Mostpopular";
import JustForYou from "../components/JustForYou";


export default function index() {
  return (
<SafeAreaView>
    <ScrollView>
        <ProjectDetail/>
        <Delivery/>
        <Specifications/>
        <Quantity/>
        <Rating/>
        <Mostpopular/>
       <JustForYou/>
    </ScrollView>
</SafeAreaView>
  )
}
