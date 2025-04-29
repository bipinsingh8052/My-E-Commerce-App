import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import axios from "axios";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import RazorpayCheckout from 'react-native-razorpay';
import { Platform } from 'react-native';
export default function PaymentOption() {
  // redux  value
  const value = useSelector((state:any) => state.cart.items);
  // console.log(value,"payment console")
  const totals:any = value.reduce(
    (accumulator:any, e:any) => {
      accumulator.total += e.price * e.qty; // Sum total price
      accumulator.quantity += e.qty; // Sum total quantity
      return accumulator; // Return the accumulator for the next iteration
    },
    { total: 0, quantity: 0 } // Initial value for the accumulator
  );
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const [Productid, SetProductid] = useState("");
  const [Userid, SetUserid] = useState("");
  const [email, setEmail] = useState("");
  const [qty, setQty] = useState(0);
  const [token, settoken] = useState("");
  const [load, setLoad] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisibletwo, setModalVisibletwo] = useState(false);
  const [input, setinput] = useState({
    name: "",
    mobileNo: "",
    NoAnother: "",
    addressOption: "",
    cityname: "",
    HouseNo: "",
    addressNo: "",
    PinCode: "",
    delivery: "",
  });

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [selectedPaymentId, setSelectedPaymentId] = useState<
    string | undefined
  >();

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Office",
        value: "Office",
      },
      {
        id: "2",
        label: "Home",
        value: "Home",
      },
      {
        id: "3",
        label: "Other",
        value: "Other",
      },
    ],
    []
  );
  const Paymentbtn: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Express",
        value: "Express",
        days: "7-5",
      },
      {
        id: "2",
        label: "Standard",
        value: "Standard",
        days: "3-5",
      },
    ],
    []
  );

  // handle input
  const handleInput = () => {
    // console.log(input,selectedPaymentId);
  };
  // handle input

  // payment btn

  // const paymentBtn = async () => {
  //   // setLoad(true);
  //   // this is Delivery
  //   let firstDelivery = false;
  //   let secondDelivery = false;

  //   if (selectedPaymentId == 1) {
  //     firstDelivery = true;
  //   }
  //   if (selectedPaymentId == 2) {
  //     secondDelivery = true;
  //   }
  //   if (!input.name) {
  //     Alert.alert("please Enter the name: ");
  //   }
  //   let shippingDetails = {
  //     fullName: input.name,
  //     phone: input.mobileNo,
  //     addressLine: input.addressNo,
  //     expressDelivery: firstDelivery,
  //     slowDelivery: secondDelivery,
  //     city: input.cityname,
  //     postalCode: input.PinCode,
  //   };

  //   for (let key in shippingDetails) {
  //     if (key !== 'expressDelivery' && key !== 'slowDelivery' && ! shippingDetails[key]) {
  //       Toast.show({ type: 'error', text1: `Missing address: ${key}` });
  //       return; 
  //     }

  //   }
  //   if (!shippingDetails.expressDelivery && !shippingDetails.slowDelivery) {
  //     Toast.show({ type: 'error', text1: 'Please select at least one delivery option: Express or Slow.' });
  //     return; 
  //   }
  //   // console.log("producet detaila: ", shippingDetails);
  //   // this is Delivery

  //   // Know it start the the work from axios
  //   // const options = {
  //   //   description: 'Credits towards consultation',
  //   //   image: 'https://i.imgur.com/3g7nmJC.jpg',
  //   //   currency: 'INR',
  //   //   key: 'rzp_test_PTYTyLcIdYhrcy',
  //   //   amount: totals.total*100,
  //   //   name:shippingDetails.fullName,
  //   //   order_id: Userid,//Replace this with an order_id created using Orders API.
  //   //   prefill: {
  //   //     email:email,
  //   //     contact: shippingDetails.phone,
  //   //     name: shippingDetails.fullName
  //   //   },
  //   //   theme: {color: '#53a20e'}
  //   // }

  //   // try {
  //   //   RazorpayCheckout.open(options)
  //   //   .then(async(data) => {
  //   //     // handle success
  //   //     const response = await axios.post(
  //   //       "https://nexx-js-e-commerce-app-491i.vercel.app/api/orders",
  //   //       {
  //   //         productId: Productid,
  //   //         shippingDetails: shippingDetails,
  //   //         userId: Userid,
  //   //         quantity: qty,
  //   //       },
  //   //       {
  //   //         headers: {
  //   //           Authorization: `Bearer ${token}`,
  //   //         },
  //   //       }
  //   //     );
  //   //     console.log(response.data);
  //   //     Toast.show({
  //   //       type: "success", // 'success', 'error', 'info'
  //   //       text1: response.data.message,
  //   //       position: "top", // 'top', 'bottom', 'center'
  //   //       visibilityTime: 4000, // Duration in milliseconds
  //   //       autoHide: true, // Automatically hide after visibilityTime
  //   //     });
  //   //     //  ${data.razorpay_payment_id}
  //   //   }).catch((error) => {
  //   //     // handle failure
  //   //     alert(`Error: ${error.code} | ${error.description}`);
  //   //   });
      
  //   //   // console.log("npormal;")
     
  //   //   // setLoad(false)
  //   //     // RazorpayCheckout.open(options)
      
  //   // }
  //   //  catch (error) {
  //   //   if (axios.isAxiosError(error)) {
  //   //     console.error("Axios error:", error.response?.data || error.message);
  //   //   } else {
  //   //     console.error("Unexpected error:", error);
  //   //   }
  //   //   Toast.show({
  //   //     type: "error", // 'success', 'error', 'info'
  //   //     text1: " Order Placed is not Completed Please try again!!",
  //   //     position: "top", // 'top', 'bottom', 'center'
  //   //     visibilityTime: 4000, // Duration in milliseconds
  //   //     autoHide: true, // Automatically hide after visibilityTime
  //   //   });
  //   //   // setLoad(false);
  //   // }
  //   // // Know it end the the work from axios
  // };
  const paymentBtn = async () => {
    let firstDelivery = false;
    let secondDelivery = false;
    try {
        // Validate delivery selection first
          if (selectedPaymentId == 1) {
      firstDelivery = true;
      // Toast.show({ type: 'error', text1: 'Please select a delivery method' });
      //       return;
    }
    if (selectedPaymentId == 2) {
      secondDelivery = true;
      // Toast.show({ type: 'error', text1: 'Please select a delivery method' });
      //       return;
    }
        // if (selectedPaymentId != 1 || selectedPaymentId != 2) {
            
        // }

        // Validate input fields
        const requiredFields = {
            name: input.name,
            mobileNo: input.mobileNo,
            addressNo: input.addressNo,
            cityname: input.cityname,
            PinCode: input.PinCode
        };

        for (const [field, value] of Object.entries(requiredFields)) {
            if (!value?.trim()) {
                Toast.show({ type: 'error', text1: `Missing ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}` });
                return;
            }
        }

        // Prepare shipping details
        const shippingDetails = {
            fullName: input.name.trim(),
            phone: input.mobileNo.trim(),
            addressLine: input.addressNo.trim(),
            expressDelivery:firstDelivery ,
            slowDelivery: secondDelivery,
            city: input.cityname.trim(),
            postalCode: input.PinCode.trim()
        };

        // Payment configuration
        
       
        const paymentOptions = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_PTYTyLcIdYhrcy',
        amount: totals.total * 100,
        name: shippingDetails.fullName,
        orderId:`orderid_${Date.now()} `,
        prefill: {
          email: email,
          contact: shippingDetails.phone,
          name: shippingDetails.fullName
      },
      theme: { color: '#53a20e' }
    };
        console.log(paymentOptions,"ths is Your Payment Options btn")

        // Initiate payment
        const paymentResponse = await RazorpayCheckout.open(paymentOptions).then((data :any) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        })
      
        
        console.log(paymentResponse ,"thsi Process order on successful payment")
        // Process order on successful payment
        const orderResponse = await axios.post(
            "https://nexx-js-e-commerce-app-491i.vercel.app/api/orders",
            {
                productId: Productid,
                shippingDetails,
                userId: Userid,
                quantity: qty,
            },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        Toast.show({
            type: "success",
            text1: orderResponse.data.message,
            position: "top",
            visibilityTime: 4000
        });

    } catch (error) {
        handlePaymentError(error);
    }
};

// Helper function for error handling
const handlePaymentError = (error:any) => {
    const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : error.description || 'Payment failed';
console.log(error.response?.data?.message,error.description,error.message )
    Toast.show({
        type: "error",
        text1: errorMessage,
        position: "top",
        visibilityTime: 4000
    });
};
  // payment btn

  const loading = async () => {
    // find the infromation from token
    let toke:any = await AsyncStorage.getItem("token");
    settoken(toke);
    const decode = jwtDecode(toke);

    //  console.log(decode,"decode the token")
    SetUserid(decode.id);
    SetProductid(value[0].id);
    setQty(value[0].qty);
    setEmail(decode.email);
    // find the infromation from token
  };


//   const rozarpay = () => {
//     var options = {
//       description: 'Credits towards consultation',
//       image: 'https://i.imgur.com/3g7nmJC.jpg',
//       currency: 'INR',
//       key: 'u21YirQK4tDGEYrbsbfbJeZZ',
//       amount: '5000',
//       name: 'Acme Corp',
//       order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
//       prefill: {
//         email: 'gaurav.kumar@example.com',
//         contact: '9191919191',
//         name: 'Gaurav Kumar'
//       },
//       theme: {color: '#53a20e'}
//     }
//     RazorpayCheckout.open(options).then((data) => {
//       // handle success
//       alert(`Success: ${data.razorpay_payment_id}`);
//     }).catch((error) => {
//       // handle failure
//       alert(`Error: ${error.code} | ${error.description}`);
//     });
// };

  // const options = {
  //   description: "Credits towards consultation",
  //   image: "https://your-image-url.com",
  //   currency: "INR",
  //   key: "u21YirQK4tDGEYrbsbfbJeZZ",
  //   amount: "5000", // Amount in paise
  //   name: "Your Company Name",
  //   order_id: "", // Replace with the order ID from your server
  //   prefill: {
  //     email: "customer@example.com",
  //     contact: "9191919191",
  //     name: "Customer Name",
  //   },
  //   theme: { color: "#F37254" },
  // };
  // this is rozarpay btn function



  const createOrder = async () => {
    // if (!item || !item.amount) {
    //   Alert.alert('Error', 'Item data is missing or incomplete.');
    //   return;
    // }

    // setLoading(true);
    try {
      const response = await fetch('https://dolphin-app-oki4e.ondigitalocean.app/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          linkId: "bbiipinnn",
          orderId: 12,
          amount: 100,
          currency: 'INR',
          receivedId: 'your-received-id',
        }),
      });
      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch (err) {
        console.error('Invalid JSON response:',text);
        Alert.alert('Error', 'Invalid response from server.');
        return;
      }
      if (response.ok) {
        Alert.alert('Order Created');

        const options = {
          description: 'Payment for order',
          image: 'https://cybrom.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbnwywv61%2Fimage%2Fupload%2Fv1729239297%2Fimage%2520converted%2520webp%2Fcybrom_main_tkhnb8_i8cf1y-optimized_11zon_oepzqr.webp&w=384&q=75',
          order_id: result.orderId,
          key: 'rzp_live_hUsARCAPAsSBNo',
          amount: result.amount,
          currency: result.currrency,
          name: 'Erp App Cybrom',
          prefill: {
            email:  'example@gmail.com',
            contact:  '1234567890',
            name: 'User Name',
          },
          theme: { color: '#2b92e0' },
        };
        if (Platform.OS === "web") {
          if (!isRazorpayLoaded) {
            Alert.alert("Error", "Razorpay SDK is not loaded yet. Please try again.");
            return;
          }
          const rzp = new (window as any).Razorpay(options);

          rzp.open();
          rzp.on("payment.failed", function (response: any) {
            Alert.alert("Payment Failed", response.error.description);
          });
        } else {
          try {
            const data = await RazorpayCheckout.open(options);
            Alert.alert("Payment Successful");
            const saveData = {
              linkId:"http",
              orderId: result.orderId,
              installmentID: 1,
              TotalAmountPay: result.amount
            };
            const response = await axios.get(
             ` https://dolphin-app-oki4e.ondigitalocean.app/api/razorpay/check-payment-status/${result.orderId}`
            );
            if (response.data.status === "paid") {
              try {
                const updateResponse = await axios.patch(
                 ` https://dolphin-app-oki4e.ondigitalocean.app/api/student/FeesFineStatus`,
                  saveData
                );
                if (updateResponse) {
                  Alert.alert("Payment Updated", "Your payment status has been updated.");
                }
                
              } catch (updateError: any) {
                console.error("Error updating payment status:", updateError);
                Alert.alert("Update Failed", "Could not update payment status.");
              }
            } else {
              Alert.alert("Payment Pending", "Your payment is not completed yet.");
            }
          } catch (error: any) {
            console.error("Payment Error:", error);
            Alert.alert("Payment Failed", error.description || "Something went wrong");
          }

        }
      } else {
        Alert.alert('Error', 'Failed to create order.');
      }
    } 
    catch (error) {
      console.error('Error creating order:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } 
  };

  useEffect(() => {
    loading();
    // this is rezor pay function
//     if (Platform.OS === "web") {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       script.onload = () => setIsRazorpayLoaded(true);
//       document.body.appendChild(script);
//     }

  }, []);

  return (
    <>
      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View
            style={{
              position: "absolute",
              top: 0,
              flex: 1,
              backgroundColor: "f4f4f4",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: "auto",
                width: "80%",
                backgroundColor: "white",
                borderRadius: 10,
                gap: 20,
                borderWidth: 0.5,
                borderColor: "transparent",
              }}
            >
              <View style={{ marginTop: 20, paddingHorizontal: 10, gap: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 700 }}>
                  {" "}
                  Select One Option :
                </Text>
                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                  layout="row"
                />
              </View>
              <View style={{ paddingHorizontal: 20, gap: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  Enter the City Name:
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 20,
                    borderWidth: 0.5,
                    paddingLeft: 10,
                  }}
                  placeholder="Enter the City name"
                  onChangeText={(e) => {
                    setinput((pre) => ({ ...pre, cityname: e }));
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 20, gap: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  Enter the House No:
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 20,
                    borderWidth: 0.5,
                    paddingLeft: 10,
                  }}
                  placeholder="e.g 122/25 "
                  keyboardType="default"
                  onChangeText={(e) => {
                    setinput((pre) => ({ ...pre, HouseNo: e }));
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 20, gap: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  Enter the Address No:
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 20,
                    borderWidth: 0.5,
                    paddingLeft: 10,
                  }}
                  placeholder="e.g 122/25 "
                  keyboardType="default"
                  onChangeText={(e) => {
                    setinput((pre) => ({ ...pre, addressNo: e }));
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 20, gap: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  Enter the PinCode No:
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 20,
                    borderWidth: 0.5,
                    paddingLeft: 10,
                  }}
                  placeholder="Enter the City name"
                  keyboardType="numeric"
                  onChangeText={(e) => {
                    setinput((pre) => ({ ...pre, PinCode: e }));
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "blue",
                    paddingVertical: 10,
                    borderRadius: 20,
                    margin: 0,
                  }}
                  onPress={() => {
                    setModalVisible(false), handleInput();
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 15, fontWeight: 700 }}
                  >
                    Submit your Address
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibletwo}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              flex: 1,
              backgroundColor: "f4f4f4",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: "auto",
                width: "80%",
                backgroundColor: "white",
                borderRadius: 10,
                gap: 20,
                borderWidth: 0.5,
                borderColor: "transparent",
              }}
            >
              <View style={{ paddingHorizontal: 20, gap: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  Enter the Name:
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 20,
                    borderWidth: 0.5,
                    paddingLeft: 10,
                  }}
                  placeholder="Enter the  name"
                  keyboardType="default"
                  onChangeText={(e) => {
                    setinput((pre) => ({ ...pre, name: e }));
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 20, gap: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  Enter the Mobile No:
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 20,
                    borderWidth: 0.5,
                    paddingLeft: 10,
                  }}
                  placeholder="Enter the Mobile no"
                  keyboardType="phone-pad"
                  onChangeText={(e) => {
                    setinput((pre) => ({ ...pre, mobileNo: e }));
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 20, gap: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  Enter the Another No:
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 20,
                    borderWidth: 0.5,
                    paddingLeft: 10,
                  }}
                  placeholder="e.g 122/25 "
                  keyboardType="phone-pad"
                  onChangeText={(e) => {
                    setinput((pre) => ({ ...pre, NoAnother: e }));
                  }}
                />
              </View>

              <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "blue",
                    paddingVertical: 10,
                    borderRadius: 20,
                    margin: 0,
                  }}
                  onPress={() => {
                    setModalVisibletwo(false), handleInput();
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 15, fontWeight: 700 }}
                  >
                    Submit Contact Details{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {load ? (
          <View
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ height: "100%", width: "100%" }}>
              <Loader loading={load} />
            </View>
          </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                zIndex: 8,
                backgroundColor: "white",
                width: "100%",
              }}
            >
              <View
                style={{
                  height: 60,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 20,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 800 }}>
                  Total  ₹ {totals.total}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "black",
                    paddingHorizontal: 30,
                    paddingVertical: 5,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    paymentBtn()
                    // rozarpay()
                  }}
                >
                  <Text style={{color:"white"}}>pay</Text>
                </TouchableOpacity>
                
              </View>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: 700 }}>Payment</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  marginTop: 10,
                  padding: 10,
                  backgroundColor: "#D3D3D3",
                  borderRadius: 10,
                  alignItems: "flex-end",
                  justifyContent: "space-around",
                }}
              >
                <View style={{ width: "80%" }}>
                  <Text style={{ fontSize: 16, fontWeight: 700 }}>
                    Shipping Address
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: 350 }}>
                    {input.HouseNo} {input.addressNo} {input.PinCode}{" "}
                    {input.cityname}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 10,
                      backgroundColor: "blue",
                      borderRadius: 50,
                      textAlign: "center",
                    }}
                    onPress={() => {
                      setModalVisible(true);
                    }}
                  >
                    <EvilIcons name="pencil" size={22} color={"white"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  marginTop: 10,
                  padding: 10,
                  backgroundColor: "#D3D3D3",
                  borderRadius: 10,
                  alignItems: "flex-end",
                  justifyContent: "space-around",
                }}
              >
                <View style={{ width: "80%" }}>
                  <Text style={{ fontSize: 16, fontWeight: 700 }}>
                    Contact Information
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: '350'}}>
                    {input.mobileNo} , {input.NoAnother}
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: '350' }}>{email}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 10,
                      backgroundColor: "blue",
                      borderRadius: 50,
                      textAlign: "center",
                    }}
                    onPress={() => {
                      setModalVisibletwo(true);
                    }}
                  >
                    <EvilIcons name="pencil" size={22} color={"white"} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Items in there */}
              <View style={{ marginTop: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Text style={{ fontSize: 24, fontWeight: 800 }}>Items</Text>
                    <Text
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        backgroundColor: "#87CEFA",
                        borderRadius: 50,
                        fontSize: 12,
                        fontWeight: 900,
                      }}
                    >
                      {value.length}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: "blue",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 10,
                    }}
                  >
                    <Text style={{ color: "blue" }}>Add Voucher</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <ScrollView>
                {value.map((e:any, index:any) => {
                  const galleryImages = e.image.includes(".svg")
                    ? e.image.replace("/upload/", "/upload/f_png/")
                    : e.image;
                  return (
                    <View
                      key={index}
                      style={{
                        height: 70,
                        width: "100%",
                        flexDirection: "row",
                        gap: 10,
                        alignItems: "center",
                        marginTop: 20,
                      }}
                    >
                      <View
                        style={{
                          height: "90%",
                          width: "20%",
                          padding: 5,
                          backgroundColor: "#87CEFA",
                          borderRadius: 50,
                        }}
                      >
                        <Image
                          source={{ uri: galleryImages }}
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: 50,
                          }}
                        />
                        <Text
                          style={{
                            position: "absolute",
                            backgroundColor: "#87CEFA",
                            borderRadius: 50,
                            right: -5,
                            paddingHorizontal: 8,
                            paddingVertical: 3,
                            fontWeight: 800,
                            textAlign: "center",
                            fontSize: 18,
                          }}
                        >
                          {" "}
                          {e.qty}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "50%",
                          alignSelf: "flex-start",
                          paddingTop: 10,
                        }}
                      >
                        <Text style={{ fontSize: 10, fontWeight: 500 }}>
                          {e.productname}
                        </Text>
                        <Text style={{ fontSize: 10, fontWeight: 500 }}>
                          {" "}
                          size : {e.size}
                        </Text>
                      </View>
                      <View style={{ width: "30%" }}>
                        <Text style={{ fontSize: 20, fontWeight: 800 }}>
                          $ {e.price}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
              {/* Shppping section */}

              <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 25, fontWeight: 800 }}>
                  Shipping Options
                </Text>
                {Paymentbtn.map((btn) => (
                  <TouchableOpacity
                    key={btn.id}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor:
                        selectedPaymentId === btn.id ? "#007bff" : "#ccc",
                      borderRadius: 8,
                      padding: 10,
                      backgroundColor:
                        selectedPaymentId === btn.id
                          ? "#e6f0ff"
                          : "transparent",
                    }}
                    onPress={(e) => {
                      setSelectedPaymentId(btn.id);
                    }}
                  >
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: "#007bff",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {selectedPaymentId === btn.id && (
                        <View
                          style={{
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            backgroundColor: "#007bff",
                          }}
                        />
                      )}
                    </View>

                    <View
                      style={{
                        marginLeft: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: 20,
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>{btn.label}</Text>
                      <Text
                        style={{
                          color: "blue",
                          paddingHorizontal: 20,
                          backgroundColor: "white",
                          borderRadius: 10,
                        }}
                      >
                        {" "}
                        {btn.days} days
                      </Text>
                      <Text style={{ fontWeight: "bold" }}>Free</Text>
                    </View>
                  </TouchableOpacity>
                ))}
                <Text style={{ fontSize: 8 }}>
                  Delivered on or before Thursday,23 April 2020
                </Text>
              </View>
            </View>
            {/* Shppping section */}

            {/* payment Method section */}
            <View
              style={{ paddingHorizontal: 20, marginTop: 10, marginBottom: 90 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: "800" }}>
                  Payment Method
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "blue",
                    paddingHorizontal: 5,
                    paddingVertical: 8,
                    borderRadius: 50,
                    alignSelf: "center",
                  }}
                >
                  <Text>
                    <EvilIcons name="pencil" size={25} color={"white"} />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* payment Method section */}

            {/*Price section is there */}
          </ScrollView>
        )}
      </SafeAreaView>
      <Toast />
    </>
  );
}
