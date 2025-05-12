
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing,
  Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Icon = ({ name, size, color }) => {
  let iconText = '⚠️';
  if (name === 'coffee') iconText = '☕';
  if (name === 'cart') iconText = '🛒';
  if (name === 'clipboard-list') iconText = '📋';
  if (name === 'account') iconText = '👤';
  if (name === 'email-outline') iconText = '✉️';
  if (name === 'lock-outline') iconText = '🔒';
  if (name === 'eye-outline') iconText = '👁️';
  if (name === 'eye-off-outline') iconText = '👁️‍🗨️';
  if (name === 'arrow-left') iconText = '⬅️';
  if (name === 'account-outline') iconText = '👤';
  if (name === 'lock-check-outline') iconText = '🔐';
  if (name === 'google') iconText = 'G';
  if (name === 'facebook') iconText = 'f';
  if (name === 'bell-outline') iconText = '🔔';
  if (name === 'heart-outline') iconText = '❤️';
  if (name === 'magnify') iconText = '🔍';
  if (name === 'plus') iconText = '+';
  if (name === 'minus') iconText = '-';
  if (name === 'delete-outline') iconText = '🗑️';
  if (name === 'credit-card-outline') iconText = '💳';
  if (name === 'cash') iconText = '💵';
  if (name === 'qrcode') iconText = '📱';
  if (name === 'check-circle') iconText = '✅';
  if (name === 'history') iconText = '⏱️';
  if (name === 'home') iconText = '🏠';
  if (name === 'cog') iconText = '⚙️';
  if (name === 'logout') iconText = '🚪';
  
  return (
    <Text style={{ fontSize: size, color: color }}>{iconText}</Text>
  );
};


const Animatable = {
  View: ({ animation, duration, delay, style, children }) => (
    <View style={style}>
      {children}
    </View>
  ),
  Text: ({ animation, duration, delay, style, children }) => (
    <Text style={style}>
      {children}
    </Text>
  ),
};


const productData = [
  {
    id: '1',
    name: 'Café Espresso',
    description: 'Café espresso tradicional, forte e encorpado.',
    price: 5.90,
    image: 'espresso.png',
    category: 'Cafés',
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Espresso com leite vaporizado e espuma de leite.',
    price: 8.50,
    image: 'cappuccino.png',
    category: 'Cafés',
  },
  {
    id: '3',
    name: 'Latte',
    description: 'Café expresso com leite vaporizado e uma fina camada de espuma.',
    price: 9.20,
    image: 'latte.png',
    category: 'Cafés',
  },
  {
    id: '4',
    name: 'Croissant',
    description: 'Clássico croissant francês, leve e crocante.',
    price: 6.50,
    image: 'croissant.png',
    category: 'Salgados',
  },
  {
    id: '5',
    name: 'Brownie',
    description: 'Brownie de chocolate intenso com nozes.',
    price: 7.90,
    image: 'brownie.png',
    category: 'Doces',
  },
  {
    id: '6',
    name: 'Cheesecake',
    description: 'Cheesecake cremoso com calda de frutas vermelhas.',
    price: 12.90,
    image: 'cheesecake.png',
    category: 'Doces',
  },
  {
    id: '7',
    name: 'Sanduíche Natural',
    description: 'Pão integral, frango desfiado, alface, tomate e maionese especial.',
    price: 14.90,
    image: 'sandwich.png',
    category: 'Salgados',
  },
  {
    id: '8',
    name: 'Suco Natural',
    description: 'Suco natural de laranja, feito na hora.',
    price: 8.90,
    image: 'juice.png',
    category: 'Bebidas',
  },
];


const placeholderImage = 'https://via.placeholder.com/150';


const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.splashContainer}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image 
          source={{ uri: placeholderImage }} 
          style={styles.splashLogo} 
          resizeMode="contain" 
        />
      </Animated.View>
      <Animatable.Text
        animation="fadeIn"
        duration={1800}
        style={styles.splashTitle}
      >
        Aroma Café
      </Animatable.Text>
      <Animatable.Text
        animation="fadeIn"
        delay={300}
        duration={1800}
        style={styles.splashSubtitle}
      >
        Sabores que encantam
      </Animatable.Text>
    </View>
  );
};

//Tela de Login
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    
    navigation.replace('Main');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animatable.View animation="fadeIn" duration={1000} style={styles.logoContainer}>
          <Image
            source={{ uri: placeholderImage }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>Aroma Café</Text>
        </Animatable.View>
        
        <Animatable.View animation="fadeInUp" duration={1000} style={styles.formContainer}>
          <Text style={styles.title}>Bem-vindo de volta!</Text>
          <Text style={styles.subtitle}>Faça login para continuar</Text>
          
          <View style={styles.inputContainer}>
            <Icon name="email-outline" size={20} color="#6F4E37" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#B8A79E"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Icon name="lock-outline" size={20} color="#6F4E37" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#B8A79E"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Icon
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#6F4E37"
              />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          
          <View style={styles.orContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>ou</Text>
            <View style={styles.divider} />
          </View>
          
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
              <Icon name="google" size={20} color="#DB4437" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
              <Icon name="facebook" size={20} color="#4267B2" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.registerContainer}>
            <Text style={styles.noAccountText}>Não tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Tela de Cadastro
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    
    navigation.replace('Main');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#6F4E37" />
        </TouchableOpacity>
        
        <Animatable.View animation="fadeIn" duration={1000} style={styles.logoContainer}>
          <Image
            source={{ uri: placeholderImage }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>Aroma Café</Text>
        </Animatable.View>
        
        <Animatable.View animation="fadeInUp" duration={1000} style={styles.formContainer}>
          <Text style={styles.title}>Criar Conta</Text>
          <Text style={styles.subtitle}>Preencha os dados para se cadastrar</Text>
          
          <View style={styles.inputContainer}>
            <Icon name="account-outline" size={20} color="#6F4E37" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              placeholderTextColor="#B8A79E"
              value={name}
              onChangeText={setName}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Icon name="email-outline" size={20} color="#6F4E37" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#B8A79E"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Icon name="lock-outline" size={20} color="#6F4E37" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#B8A79E"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Icon
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#6F4E37"
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputContainer}>
            <Icon name="lock-check-outline" size={20} color="#6F4E37" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              placeholderTextColor="#B8A79E"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
              <Icon
                name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#6F4E37"
              />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Cadastrar</Text>
          </TouchableOpacity>
          
          <View style={styles.orContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>ou</Text>
            <View style={styles.divider} />
          </View>
          
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
              <Icon name="google" size={20} color="#DB4437" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
              <Icon name="facebook" size={20} color="#4267B2" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.loginContainer}>
            <Text style={styles.alreadyAccountText}>Já tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

//Tela de Cardápio
const MenuScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [cartItems, setCartItems] = useState([]);

  
  const categories = ['Todos', 'Cafés', 'Bebidas', 'Doces', 'Salgados'];

  useEffect(() => {
    filterProducts();
  }, [searchQuery, selectedCategory]);

  const filterProducts = () => {
    let filtered = productData;
    
    
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    
    Alert.alert(`${product.name} adicionado ao carrinho!`);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item && styles.categoryItemSelected,
      ]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && styles.categoryTextSelected,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item, index }) => (
    <Animatable.View
      animation="fadeInUp"
      delay={index * 100}
      duration={800}
      style={styles.productCard}
    >
      <Image source={{ uri: placeholderImage }} style={styles.productImage} resizeMode="cover" />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.productPriceRow}>
          <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addToCart(item)}
          >
            <Icon name="plus" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </Animatable.View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerTitle}>Cardápio</Text>
            <Text style={styles.headerSubtitle}>Encontre seus favoritos</Text>
          </View>
          <View style={styles.headerRightContent}>
            <TouchableOpacity style={styles.headerIconButton}>
              <Icon name="bell-outline" size={24} color="#6F4E37" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.headerIconButton}
              onPress={() => navigation.navigate('Cart')}
            >
              <Icon name="cart" size={24} color="#6F4E37" />
              {cartItems.length > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={20} color="#B8A79E" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar produtos..."
          placeholderTextColor="#B8A79E"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      {/* Products List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productsList}
      />
    </View>
  );
};

//Tela de Carrinho
const CartScreen = ({ navigation }) => {
  
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Café Espresso',
      description: 'Café espresso tradicional, forte e encorpado.',
      price: 5.90,
      image: 'espresso.png',
      quantity: 2,
    },
    {
      id: '3',
      name: 'Latte',
      description: 'Café expresso com leite vaporizado e uma fina camada de espuma.',
      price: 9.20,
      image: 'latte.png',
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, action) => {
    setCartItems(
      cartItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
          };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    navigation.navigate('Payment', { total: calculateTotal() });
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: placeholderImage }} style={styles.cartItemImage} />
      <View style={styles.cartItemInfo}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.cartItemQuantity}>
        <TouchableOpacity 
          style={styles.quantityButton}
          onPress={() => updateQuantity(item.id, 'decrease')}
        >
          <Icon name="minus" size={16} color="#6F4E37" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity 
          style={styles.quantityButton}
          onPress={() => updateQuantity(item.id, 'increase')}
        >
          <Icon name="plus" size={16} color="#6F4E37" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={() => removeItem(item.id)}
      >
        <Icon name="delete-outline" size={22} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Seu Carrinho</Text>
          <Text style={styles.headerSubtitle}>
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'}
          </Text>
        </View>
      </View>

      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.cartList}
          />
          
          <View style={styles.cartSummary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Subtotal</Text>
              <Text style={styles.summaryValue}>R$ {calculateTotal().toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Taxa de entrega</Text>
              <Text style={styles.summaryValue}>R$ 0.00</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalValue}>R$ {calculateTotal().toFixed(2)}</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.checkoutButton}
              onPress={handleCheckout}
            >
              <Text style={styles.checkoutButtonText}>Finalizar Pedido</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Icon name="cart" size={80} color="#B8A79E" />
          <Text style={styles.emptyCartTitle}>Seu carrinho está vazio</Text>
          <Text style={styles.emptyCartSubtitle}>
            Adicione alguns itens deliciosos do nosso cardápio
          </Text>
          <TouchableOpacity 
            style={styles.browseButton}
            onPress={() => navigation.navigate('Menu')}
          >
            <Text style={styles.browseButtonText}>Ver Cardápio</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

//Tela de Pagamento
const PaymentScreen = ({ navigation, route }) => {
  const { total } = route.params || { total: 0 };
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const handlePayment = () => {
    
    setTimeout(() => {
      navigation.navigate('OrderStatus', { 
        orderId: Math.floor(100000 + Math.random() * 900000).toString(),
        total: total,
      });
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.paymentScrollContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#6F4E37" />
        </TouchableOpacity>
        
        <Text style={styles.paymentTitle}>Pagamento</Text>
        <Text style={styles.paymentSubtitle}>Escolha a forma de pagamento</Text>
        
        <View style={styles.paymentMethodsContainer}>
          <TouchableOpacity 
            style={[
              styles.paymentMethodCard,
              paymentMethod === 'creditCard' && styles.paymentMethodSelected,
            ]}
            onPress={() => setPaymentMethod('creditCard')}
          >
            <Icon 
              name="credit-card-outline"
              size={24}
              color={paymentMethod === 'creditCard' ? '#6F4E37' : '#B8A79E'}
            />
            <Text 
              style={[
                styles.paymentMethodText,
                paymentMethod === 'creditCard' && styles.paymentMethodTextSelected,
              ]}
            >
              Cartão de Crédito
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.paymentMethodCard,
              paymentMethod === 'debitCard' && styles.paymentMethodSelected,
            ]}
            onPress={() => setPaymentMethod('debitCard')}
          >
            <Icon 
              name="credit-card-outline"
              size={24}
              color={paymentMethod === 'debitCard' ? '#6F4E37' : '#B8A79E'}
            />
            <Text 
              style={[
                styles.paymentMethodText,
                paymentMethod === 'debitCard' && styles.paymentMethodTextSelected,
              ]}
            >
              Cartão de Débito
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.paymentMethodCard,
              paymentMethod === 'cash' && styles.paymentMethodSelected,
            ]}
            onPress={() => setPaymentMethod('cash')}
          >
            <Icon 
              name="cash"
              size={24}
              color={paymentMethod === 'cash' ? '#6F4E37' : '#B8A79E'}
            />
            <Text 
              style={[
                styles.paymentMethodText,
                paymentMethod === 'cash' && styles.paymentMethodTextSelected,
              ]}
            >
              Dinheiro
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.paymentMethodCard,
              paymentMethod === 'pix' && styles.paymentMethodSelected,
            ]}
            onPress={() => setPaymentMethod('pix')}
          >
            <Icon 
              name="qrcode"
              size={24}
              color={paymentMethod === 'pix' ? '#6F4E37' : '#B8A79E'}
            />
            <Text 
              style={[
                styles.paymentMethodText,
                paymentMethod === 'pix' && styles.paymentMethodTextSelected,
              ]}
            >
              PIX
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* Campos de entrada para cartão de crédito/débito */}
        {(paymentMethod === 'creditCard' || paymentMethod === 'debitCard') && (
          <View style={styles.cardDetailsContainer}>
            <Text style={styles.cardDetailsTitle}>Detalhes do Cartão</Text>
            
            <View style={styles.inputContainer}>
              <Icon name="credit-card-outline" size={20} color="#6F4E37" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Número do cartão"
                placeholderTextColor="#B8A79E"
                value={cardNumber}
                onChangeText={setCardNumber}
                keyboardType="numeric"
                maxLength={19}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Icon name="account-outline" size={20} color="#6F4E37" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Nome no cartão"
                placeholderTextColor="#B8A79E"
                value={cardName}
                onChangeText={setCardName}
              />
            </View>
            
            <View style={styles.cardExtraSectionRow}>
              <View style={[styles.inputContainer, { flex: 1, marginRight: 10 }]}>
                <TextInput
                  style={styles.input}
                  placeholder="MM/AA"
                  placeholderTextColor="#B8A79E"
                  value={cardExpiry}
                  onChangeText={setCardExpiry}
                  keyboardType="numeric"
                  maxLength={5}
                />
              </View>
              
              <View style={[styles.inputContainer, { flex: 1, marginLeft: 10 }]}>
                <TextInput
                  style={styles.input}
                  placeholder="CVV"
                  placeholderTextColor="#B8A79E"
                  value={cardCvv}
                  onChangeText={setCardCvv}
                  keyboardType="numeric"
                  maxLength={3}
                />
              </View>
            </View>
          </View>
        )}
        
        {/* PIX QR Code */}
        {paymentMethod === 'pix' && (
          <View style={styles.pixContainer}>
            <Image 
              source={{ uri: placeholderImage }} 
              style={styles.pixQRCode} 
              resizeMode="contain"
            />
            <Text style={styles.pixInstructions}>
              Escaneie o QR code acima com o aplicativo do seu banco para fazer o pagamento via PIX
            </Text>
          </View>
        )}
        
        {/* Resumo do pedido */}
        <View style={styles.orderSummary}>
          <Text style={styles.orderSummaryTitle}>Resumo do Pedido</Text>
          <View style={styles.orderSummaryRow}>
            <Text style={styles.orderSummaryText}>Subtotal</Text>
            <Text style={styles.orderSummaryValue}>R$ {total.toFixed(2)}</Text>
          </View>
          <View style={styles.orderSummaryRow}>
            <Text style={styles.orderSummaryText}>Taxa de entrega</Text>
            <Text style={styles.orderSummaryValue}>R$ 0.00</Text>
          </View>
          <View style={[styles.orderSummaryRow, styles.orderTotalRow]}>
            <Text style={styles.orderTotalText}>Total</Text>
            <Text style={styles.orderTotalValue}>R$ {total.toFixed(2)}</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.paymentButton}
          onPress={handlePayment}
        >
          <Text style={styles.paymentButtonText}>Finalizar Pagamento</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Tela de Status do Pedido
const OrderStatusScreen = ({ navigation, route }) => {
  const { orderId, total } = route.params || { orderId: '123456', total: 0 };
  
  useEffect(() => {
    
  }, []);

  const goToHome = () => {
    navigation.navigate('Menu');
  };

  const goToOrderHistory = () => {
    navigation.navigate('OrderHistory');
  };

  return (
    <View style={styles.container}>
      <View style={styles.orderStatusContainer}>
        <View style={styles.orderStatusIconContainer}>
          <Icon name="check-circle" size={80} color="#4CAF50" />
        </View>
        
        <Text style={styles.orderStatusTitle}>Pedido Confirmado!</Text>
        <Text style={styles.orderStatusSubtitle}>
          Seu pedido #{orderId} foi recebido e está sendo preparado
        </Text>
        
        <View style={styles.orderInfoCard}>
          <View style={styles.orderInfoRow}>
            <Text style={styles.orderInfoLabel}>Status:</Text>
            <Text style={styles.orderInfoValue}>Em preparação</Text>
          </View>
          <View style={styles.orderInfoRow}>
            <Text style={styles.orderInfoLabel}>Tempo estimado:</Text>
            <Text style={styles.orderInfoValue}>15-20 minutos</Text>
          </View>
          <View style={styles.orderInfoRow}>
            <Text style={styles.orderInfoLabel}>Total:</Text>
            <Text style={styles.orderInfoValue}>R$ {total.toFixed(2)}</Text>
          </View>
        </View>
        
        <View style={styles.orderTrackingContainer}>
          <Text style={styles.orderTrackingTitle}>Acompanhe seu pedido</Text>
          
          <View style={styles.orderTrackingSteps}>
            <View style={[styles.trackingStep, styles.trackingStepActive]}>
              <View style={[styles.trackingDot, styles.trackingDotActive]}>
                <Icon name="check-circle" size={18} color="#FFFFFF" />
              </View>
              <Text style={styles.trackingStepText}>Recebido</Text>
            </View>
            
            <View style={[styles.trackingLine, styles.trackingLineActive]} />
            
            <View style={[styles.trackingStep, styles.trackingStepActive]}>
              <View style={[styles.trackingDot, styles.trackingDotActive]}>
                <Icon name="check-circle" size={18} color="#FFFFFF" />
              </View>
              <Text style={styles.trackingStepText}>Em preparação</Text>
            </View>
            
            <View style={styles.trackingLine} />
            
            <View style={styles.trackingStep}>
              <View style={styles.trackingDot} />
              <Text style={styles.trackingStepText}>Pronto</Text>
            </View>
            
            <View style={styles.trackingLine} />
            
            <View style={styles.trackingStep}>
              <View style={styles.trackingDot} />
              <Text style={styles.trackingStepText}>Entregue</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.orderButtonsContainer}>
          <TouchableOpacity 
            style={styles.orderButton}
            onPress={goToHome}
          >
            <Text style={styles.orderButtonText}>Voltar para o Cardápio</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.orderButton, styles.orderButtonOutline]}
            onPress={goToOrderHistory}
          >
            <Text style={styles.orderButtonOutlineText}>Ver Pedidos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Tela de Histórico de Pedidos
const OrderHistoryScreen = ({ navigation }) => {
  
  const [orders, setOrders] = useState([
    {
      id: '654321',
      date: '07/04/2025',
      status: 'Entregue',
      total: 24.00,
      items: [
        { id: '1', name: 'Café Espresso', quantity: 2, price: 5.90 },
        { id: '5', name: 'Brownie', quantity: 1, price: 7.90 },
        { id: '8', name: 'Suco Natural', quantity: 1, price: 8.90 },
      ],
    },
    {
      id: '543210',
      date: '02/04/2025',
      status: 'Entregue',
      total: 17.70,
      items: [
        { id: '1', name: 'Café Espresso', quantity: 1, price: 5.90 },
        { id: '3', name: 'Latte', quantity: 1, price: 9.20 },
      ],
    },
  ]);

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.orderHistoryItem}
      onPress={() => navigation.navigate('OrderDetail', { order: item })}
    >
      <View style={styles.orderHistoryHeader}>
        <View>
          <Text style={styles.orderHistoryId}>Pedido #{item.id}</Text>
          <Text style={styles.orderHistoryDate}>{item.date}</Text>
        </View>
        <View style={styles.orderHistoryStatus}>
          <Text style={styles.orderHistoryStatusText}>{item.status}</Text>
        </View>
      </View>
      
      <View style={styles.orderHistoryDivider} />
      
      <View style={styles.orderHistoryItems}>
        {item.items.slice(0, 2).map((product) => (
          <Text key={product.id} style={styles.orderHistoryItemText}>
            {product.quantity}x {product.name}
          </Text>
        ))}
        
        {item.items.length > 2 && (
          <Text style={styles.orderHistoryItemMore}>
            + {item.items.length - 2} mais itens
          </Text>
        )}
      </View>
      
      <View style={styles.orderHistoryFooter}>
        <Text style={styles.orderHistoryTotal}>Total: R$ {item.total.toFixed(2)}</Text>
        <Icon name="arrow-left" size={20} color="#6F4E37" style={{ transform: [{ rotate: '180deg' }] }} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Histórico de Pedidos</Text>
          <Text style={styles.headerSubtitle}>Seus pedidos recentes</Text>
        </View>
      </View>
      
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.orderHistoryList}
      />
    </View>
  );
};

//Tela de Detalhes do Pedido
const OrderDetailScreen = ({ navigation, route }) => {
  const { order } = route.params || { 
    id: '654321',
    date: '07/04/2025',
    status: 'Entregue',
    total: 24.00,
    items: [
      { id: '1', name: 'Café Espresso', quantity: 2, price: 5.90 },
      { id: '5', name: 'Brownie', quantity: 1, price: 7.90 },
      { id: '8', name: 'Suco Natural', quantity: 1, price: 8.90 },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.orderDetailScrollContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#6F4E37" />
        </TouchableOpacity>
        
        <Text style={styles.orderDetailTitle}>Detalhes do Pedido</Text>
        <Text style={styles.orderDetailId}>Pedido #{order.id}</Text>
        
        <View style={styles.orderDetailCard}>
          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Data:</Text>
            <Text style={styles.orderDetailValue}>{order.date}</Text>
          </View>
          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Status:</Text>
            <View style={styles.orderDetailStatusBadge}>
              <Text style={styles.orderDetailStatusText}>{order.status}</Text>
            </View>
          </View>
          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Total:</Text>
            <Text style={styles.orderDetailValue}>R$ {order.total.toFixed(2)}</Text>
          </View>
        </View>
        
        <Text style={styles.orderItemsTitle}>Itens do Pedido</Text>
        
        {order.items.map((item) => (
          <View key={item.id} style={styles.orderItemCard}>
            <Image source={{ uri: placeholderImage }} style={styles.orderItemImage} />
            <View style={styles.orderItemInfo}>
              <Text style={styles.orderItemName}>{item.name}</Text>
              <Text style={styles.orderItemQuantity}>Quantidade: {item.quantity}</Text>
            </View>
            <Text style={styles.orderItemPrice}>R$ {(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        ))}
        
        <View style={styles.orderSummaryCard}>
          <View style={styles.orderSummaryRow}>
            <Text style={styles.orderSummaryText}>Subtotal</Text>
            <Text style={styles.orderSummaryValue}>R$ {order.total.toFixed(2)}</Text>
          </View>
          <View style={styles.orderSummaryRow}>
            <Text style={styles.orderSummaryText}>Taxa de entrega</Text>
            <Text style={styles.orderSummaryValue}>R$ 0.00</Text>
          </View>
          <View style={[styles.orderSummaryRow, styles.orderTotalRow]}>
            <Text style={styles.orderTotalText}>Total</Text>
            <Text style={styles.orderTotalValue}>R$ {order.total.toFixed(2)}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.reorderButton}>
          <Text style={styles.reorderButtonText}>Pedir Novamente</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// Tela de Perfil
const ProfileScreen = ({ navigation }) => {
  
  const [user, setUser] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 98765-4321',
    address: 'Rua das Flores, 123 - São Paulo, SP',
  });

  const logOut = () => {
    
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Meu Perfil</Text>
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.profileScrollContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={{ uri: placeholderImage }} 
              style={styles.profileImage} 
            />
          </View>
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profileEmail}>{user.email}</Text>
        </View>
        
        <View style={styles.profileSection}>
          <Text style={styles.profileSectionTitle}>Informações Pessoais</Text>
          
          <View style={styles.profileInfoCard}>
            <View style={styles.profileInfoRow}>
              <Icon name="account-outline" size={22} color="#6F4E37" />
              <Text style={styles.profileInfoLabel}>Nome</Text>
              <Text style={styles.profileInfoValue}>{user.name}</Text>
            </View>
            
            <View style={styles.profileInfoRow}>
              <Icon name="email-outline" size={22} color="#6F4E37" />
              <Text style={styles.profileInfoLabel}>E-mail</Text>
              <Text style={styles.profileInfoValue}>{user.email}</Text>
            </View>
            
            <TouchableOpacity style={styles.profileInfoRow}>
              <Icon name="phone" size={22} color="#6F4E37" />
              <Text style={styles.profileInfoLabel}>Telefone</Text>
              <Text style={styles.profileInfoValue}>{user.phone}</Text>
              <Icon name="arrow-left" size={18} color="#B8A79E" style={{ transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.profileInfoRow}>
              <Icon name="home" size={22} color="#6F4E37" />
              <Text style={styles.profileInfoLabel}>Endereço</Text>
              <Text style={styles.profileInfoValue} numberOfLines={1}>{user.address}</Text>
              <Icon name="arrow-left" size={18} color="#B8A79E" style={{ transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.profileSection}>
          <Text style={styles.profileSectionTitle}>Configurações</Text>
          
          <View style={styles.profileSettingsCard}>
            <TouchableOpacity style={styles.profileSettingsRow}>
              <Icon name="history" size={22} color="#6F4E37" />
              <Text style={styles.profileSettingsText}>Histórico de Pedidos</Text>
              <Icon name="arrow-left" size={18} color="#B8A79E" style={{ transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.profileSettingsRow}>
              <Icon name="heart-outline" size={22} color="#6F4E37" />
              <Text style={styles.profileSettingsText}>Itens Favoritos</Text>
              <Icon name="arrow-left" size={18} color="#B8A79E" style={{ transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.profileSettingsRow}>
              <Icon name="credit-card-outline" size={22} color="#6F4E37" />
              <Text style={styles.profileSettingsText}>Métodos de Pagamento</Text>
              <Icon name="arrow-left" size={18} color="#B8A79E" style={{ transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.profileSettingsRow}>
              <Icon name="bell-outline" size={22} color="#6F4E37" />
              <Text style={styles.profileSettingsText}>Notificações</Text>
              <Icon name="arrow-left" size={18} color="#B8A79E" style={{ transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.profileSettingsRow}>
              <Icon name="cog" size={22} color="#6F4E37" />
              <Text style={styles.profileSettingsText}>Configurações</Text>
              <Icon name="arrow-left" size={18} color="#B8A79E" style={{ transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={logOut}
        >
          <Icon name="logout" size={22} color="#FFFFFF" />
          <Text style={styles.logoutButtonText}>Sair da Conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Navegador de Abas
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Menu') {
            iconName = 'coffee';
          } else if (route.name === 'Cart') {
            iconName = 'cart';
          } else if (route.name === 'Orders') {
            iconName = 'clipboard-list';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6F4E37',
        tabBarInactiveTintColor: '#B8A79E',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F0EAE6',
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Menu" 
        component={MenuScreen} 
        options={{ tabBarLabel: 'Cardápio' }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ tabBarLabel: 'Carrinho' }}
      />
      <Tab.Screen 
        name="Orders" 
        component={OrderHistoryScreen} 
        options={{ tabBarLabel: 'Pedidos' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarLabel: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

// Navegador Principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="OrderStatus" component={OrderStatusScreen} />
        <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F3F0',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  
  // Estilos para o SplashScreen
  splashContainer: {
    flex: 1,
    backgroundColor: '#6F4E37',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  splashTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  splashSubtitle: {
    fontSize: 18,
    color: '#F0EAE6',
  },
  
  // Estilos para o Login e Registro
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6F4E37',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F3F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 55,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333333',
  },
  eyeIcon: {
    padding: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: '#6F4E37',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#6F4E37',
    borderRadius: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#6F4E37',
    borderRadius: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0D8D0',
  },
  orText: {
    color: '#999999',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#E0D8D0',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
  },
  facebookButton: {
    backgroundColor: '#FFFFFF',
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  noAccountText: {
    color: '#666666',
    marginRight: 5,
  },
  registerText: {
    color: '#6F4E37',
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  alreadyAccountText: {
    color: '#666666',
    marginRight: 5,
  },
  loginText: {
    color: '#6F4E37',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  
  // Estilos para a tela de Menu
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6F4E37',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#B8A79E',
        marginTop: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#F7F3F0',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 45,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#333333',
        marginLeft: 10,
    },
    categoriesContainer: {
        marginTop: 20,
        marginBottom: 10,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
    },
    categoryTabs: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    categoryTab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E0D8D0',
    },
    categoryTabSelected: {
        backgroundColor: '#6F4E37',
        borderColor: '#6F4E37',
    },
    categoryTabText: {
        color: '#6F4E37',
        fontWeight: '500',
    },
    categoryTabTextSelected: {
        color: '#FFFFFF',
    },
    menuItemsContainer: {
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
        marginTop: 10,
    },
    menuGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    menuItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        width: '48%',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    menuItemImage: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    menuItemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    menuItemDescription: {
        fontSize: 12,
        color: '#999999',
        marginBottom: 10,
    },
    menuItemPriceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6F4E37',
    },
    addButton: {
        backgroundColor: '#F7F3F0',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    // Estilos para a tela de Item
    productContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    productImageContainer: {
        height: 300,
        width: '100%',
        position: 'relative',
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    productContent: {
        flex: 1,
        backgroundColor: '#F7F3F0',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    productCategory: {
        fontSize: 14,
        color: '#999999',
        marginBottom: 15,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    ratingText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginRight: 10,
    },
    starsContainer: {
        flexDirection: 'row',
    },
    reviewsText: {
        fontSize: 14,
        color: '#999999',
        marginLeft: 10,
    },
    productDescriptionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 14,
        color: '#666666',
        lineHeight: 22,
        marginBottom: 20,
    },
    sizeTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    sizeOptions: {
        flexDirection: 'row',
        marginBottom: 25,
    },
    sizeOption: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E0D8D0',
    },
    sizeOptionSelected: {
        backgroundColor: '#6F4E37',
        borderColor: '#6F4E37',
    },
    sizeOptionText: {
        fontSize: 14,
        color: '#6F4E37',
    },
    sizeOptionTextSelected: {
        color: '#FFFFFF',
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 25,
    },
    quantityTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        width: 35,
        height: 35,
        borderRadius: 18,
        backgroundColor: '#F7F3F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginHorizontal: 15,
        minWidth: 20,
        textAlign: 'center',
    },
    addToCartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    priceContainer: {
        flex: 1,
    },
    priceLabel: {
        fontSize: 14,
        color: '#999999',
    },
    priceValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6F4E37',
    },
    addToCartButton: {
        flex: 1,
        backgroundColor: '#6F4E37',
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    addToCartButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
    },
    
    // Estilos para a tela de Carrinho
    cartHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
    },
    cartHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
    },
    clearCartText: {
        color: '#E74C3C',
        fontSize: 14,
    },
    cartEmptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    cartEmptyImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    cartEmptyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
    },
    cartEmptyText: {
        fontSize: 14,
        color: '#999999',
        textAlign: 'center',
        marginBottom: 30,
    },
    browseMenuButton: {
        backgroundColor: '#6F4E37',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
    },
    browseMenuButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cartItemsContainer: {
        flex: 1,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cartItemImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    cartItemContent: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-between',
    },
    cartItemTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cartItemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        flex: 1,
    },
    cartItemSize: {
        fontSize: 12,
        color: '#999999',
        marginTop: 5,
    },
    cartItemBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    cartItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6F4E37',
    },
    cartItemQuantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartItemQuantityButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#F7F3F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartItemQuantityText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
        marginHorizontal: 10,
        minWidth: 15,
        textAlign: 'center',
    },
    cartFooter: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cartSummaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
    },
    cartSummaryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    cartSummaryText: {
        fontSize: 14,
        color: '#666666',
    },
    cartSummaryValue: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333333',
    },
    cartTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#F0EAE6',
        marginTop: 5,
        marginBottom: 20,
    },
    cartTotalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    cartTotalValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6F4E37',
    },
    checkoutButton: {
        backgroundColor: '#6F4E37',
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkoutButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
    },
    
    // Estilos para a tela de Pagamento
    paymentContainer: {
        flex: 1,
        backgroundColor: '#F7F3F0',
    },
    paymentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 15,
        backgroundColor: '#FFFFFF',
    },
    paymentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
        marginLeft: 15,
    },
    paymentContent: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
    paymentMethodsContainer: {
        marginBottom: 20,
    },
    paymentMethodsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
    },
    paymentMethods: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    paymentMethodCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        width: '48%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    paymentMethodSelected: {
        borderWidth: 2,
        borderColor: '#6F4E37',
    },
    paymentMethodText: {
        fontSize: 14,
        color: '#B8A79E',
        marginTop: 10,
    },
    paymentMethodTextSelected: {
        color: '#6F4E37',
        fontWeight: 'bold',
    },
    cardDetailsContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardDetailsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
    },
    cardExtraSectionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pixContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    pixQRCode: {
        width: 200,
        height: 200,
        marginVertical: 20,
    },
    pixInstructions: {
        fontSize: 14,
        color: '#666666',
        textAlign: 'center',
        lineHeight: 20,
    },
    orderSummary: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    orderSummaryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
    },
    orderSummaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    orderSummaryText: {
        fontSize: 14,
        color: '#666666',
    },
    orderSummaryValue: {
        fontSize: 14,
        color: '#333333',
    },
    orderTotalRow: {
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#F0EAE6',
        marginTop: 5,
    },
    orderTotalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    orderTotalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6F4E37',
    },
    paymentButton: {
        backgroundColor: '#6F4E37',
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    paymentButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    // Estilos para a tela de Status do Pedido
    orderStatusContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 40,
        alignItems: 'center',
    },
    orderStatusIconContainer: {
        marginBottom: 20,
    },
    orderStatusTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    orderStatusSubtitle: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
        marginBottom: 30,
    },
    orderInfoCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        width: '100%',
        padding: 20,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    orderInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    orderInfoLabel: {
        fontSize: 14,
        color: '#666666',
    },
    orderInfoValue: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333333',
    },
    orderTrackingContainer: {
        width: '100%',
        marginBottom: 40,
    },
    orderTrackingTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 20,
    },
    orderTrackingSteps: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
    },
    trackingStep: {
        alignItems: 'center',
    },
    trackingDot: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#E0D8D0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    trackingDotActive: {
        backgroundColor: '#6F4E37',
        borderColor: '#6F4E37',
    },
    trackingStepText: {
        fontSize: 12,
        color: '#999999',
        textAlign: 'center',
        width: 70,
    },
    trackingLine: {
        flex: 1,
        height: 2,
        backgroundColor: '#E0D8D0',
        marginHorizontal: -10,
    },
    trackingLineActive: {
        backgroundColor: '#6F4E37',
    },
    orderButtonsContainer: {
        width: '100%',
    },
    orderButton: {
        backgroundColor: '#6F4E37',
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    orderButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    orderButtonOutline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#6F4E37',
    },
    orderButtonOutlineText: {
        color: '#6F4E37',
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    // Estilos para a tela de Histórico de Pedidos
    orderHistoryList: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
    orderHistoryItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    orderHistoryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    orderHistoryId: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    orderHistoryDate: {
        fontSize: 12,
        color: '#999999',
        marginTop: 3,
    },
    orderHistoryStatus: {
        backgroundColor: '#E8F5E9',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    orderHistoryStatusText: {
        fontSize: 12,
        color: '#4CAF50',
        fontWeight: '500',
    },
    orderHistoryDivider: {
        height: 1,
        backgroundColor: '#F0EAE6',
        marginVertical: 10,
    },
    orderHistoryItems: {
        marginBottom: 10,
    },
    orderHistoryItemText: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 5,
    },
    orderHistoryItemMore: {
        fontSize: 12,
        color: '#999999',
        marginTop: 3,
    },
    orderHistoryFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderHistoryTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6F4E37',
    },
    
    // Estilos para a tela de Detalhes do Pedido
    orderDetailScrollContainer: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 40,
    },
    orderDetailTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
        marginTop: 20,
    },
    orderDetailId: {
        fontSize: 14,
        color: '#999999',
        marginBottom: 20,
    },
    orderDetailCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    orderDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    orderDetailLabel: {
        fontSize: 14,
        color: '#666666',
    },
    orderDetailValue: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333333',
    },
    orderDetailStatusBadge: {
        backgroundColor: '#E8F5E9',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    orderDetailStatusText: {
        fontSize: 12,
        color: '#4CAF50',
        fontWeight: '500',
    },
    orderItemsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
    },
    orderItemCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    orderItemImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    orderItemInfo: {
        flex: 1,
        marginLeft: 15,
    },
    orderItemName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333333',
        marginBottom: 5,
    },
    orderItemQuantity: {
        fontSize: 14,
        color: '#999999',
    },
    orderItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6F4E37',
    },
    orderSummaryCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    reorderButton: {
        backgroundColor: '#6F4E37',
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    reorderButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    // Estilos para a tela de Perfil
    profileScrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    profileHeader: {
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 20,
    },
    profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 15,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    profileEmail: {
        fontSize: 14,
        color: '#999999',
    },
    profileSection: {
        marginBottom: 25,
    },
    profileSectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
    },
    profileInfoCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    profileInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0EAE6',
    },
    profileInfoLabel: {
        fontSize: 14,
        color: '#666666',
        marginLeft: 15,
        width: 70,
    },
    profileInfoValue: {
        flex: 1,
        fontSize: 14,
        color: '#333333',
        marginLeft: 15,
    },
    profileSettingsCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
 profileSettingsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0EAE6',
    },
    profileSettingsLabel: {
        fontSize: 14,
        color: '#666666',
        marginLeft: 15,
        flex: 1,
    },
    settingsSwitch: {
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
    logoutButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    logoutText: {
        fontSize: 16,
        color: '#E74C3C',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    
    // Estilos para a tela de Edição de Perfil
    editProfileContainer: {
        flex: 1,
        backgroundColor: '#F7F3F0',
    },
    editProfileForm: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    formGroup: {
        marginBottom: 20,
    },
    formLabel: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 8,
    },
    formInput: {
        backgroundColor: '#F7F3F0',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 14,
        color: '#333333',
    },
    saveButton: {
        backgroundColor: '#6F4E37',
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    // Estilos para os Favoritos
    favoritesContainer: {
        flex: 1,
        backgroundColor: '#F7F3F0',
    },
    favoritesList: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
    favoriteItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    favoriteImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    favoriteInfo: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-between',
    },
    favoriteNameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    favoriteName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        flex: 1,
    },
    favoriteRemove: {
        padding: 5,
    },
    favoriteCategory: {
        fontSize: 12,
        color: '#999999',
        marginTop: 3,
    },
    favoriteBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    favoritePrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6F4E37',
    },
    favoriteAddButton: {
        backgroundColor: '#F7F3F0',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    favoriteAddButtonText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#6F4E37',
        marginLeft: 5,
    },
    
    // Estilos para as Notificações
    notificationsContainer: {
        flex: 1,
        backgroundColor: '#F7F3F0',
    },
    notificationsList: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
    notificationItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    notificationIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F7F3F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    notificationContent: {
        flex: 1,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    notificationMessage: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 10,
    },
    notificationTime: {
        fontSize: 12,
        color: '#999999',
    },
    
    // Estilos para TabBar e navegação
    tabBar: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 0,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        height: 60,
        paddingBottom: 5,
    },
    tabBarItem: {
        paddingTop: 10,
    },
    tabBarLabel: {
        fontSize: 12,
        marginTop: 5,
    },
    headerBackButton: {
        marginLeft: 15,
    }
});