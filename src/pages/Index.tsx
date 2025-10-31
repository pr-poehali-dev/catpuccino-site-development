import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      category: 'Кофе',
      items: [
        { name: 'Эспрессо', price: 130, description: 'Классический итальянский кофе' },
        { name: 'Американо', price: 150, description: 'Эспрессо с горячей водой' },
        { name: 'Капучино', price: 180, description: 'Эспрессо с молочной пенкой' },
        { name: 'Латте', price: 190, description: 'Кофе с молоком и нежной пенкой' },
        { name: 'Раф', price: 220, description: 'Нежный кофе со сливками' },
        { name: 'Флэт Уайт', price: 200, description: 'Двойной эспрессо с микропенкой' },
      ],
    },
    {
      category: 'Альтернативное молоко',
      items: [
        { name: 'Овсяное', price: 50, description: 'Добавка к напитку' },
        { name: 'Кокосовое', price: 50, description: 'Добавка к напитку' },
        { name: 'Миндальное', price: 50, description: 'Добавка к напитку' },
      ],
    },
    {
      category: 'Десерты',
      items: [
        { name: 'Чизкейк', price: 180, description: 'Классический с ягодным соусом' },
        { name: 'Брауни', price: 160, description: 'Шоколадный с орехами' },
        { name: 'Круассан', price: 140, description: 'Французская выпечка' },
        { name: 'Маффин', price: 120, description: 'С шоколадом или черникой' },
      ],
    },
  ];

  const benefits = [
    {
      icon: 'Coffee',
      title: 'Авторские рецепты',
      description: 'Уникальные напитки от нашего бариста',
    },
    {
      icon: 'Heart',
      title: 'Уютная атмосфера',
      description: 'Идеальное место для встреч и работы',
    },
    {
      icon: 'Sparkles',
      title: 'Свежая выпечка',
      description: 'Каждый день готовим домашние десерты',
    },
    {
      icon: 'Leaf',
      title: 'Эко-упаковка',
      description: 'Заботимся об окружающей среде',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.poehali.dev/files/bab64f0f-dc9a-4195-a77d-060bbec6c09f.png"
                alt="CATPUCCINO"
                className="h-16 w-16"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">CATPUCCINO</h1>
                <p className="text-sm text-muted-foreground font-handwritten text-lg">Purrrfect Time</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О нас' },
                { id: 'menu', label: 'Меню' },
                { id: 'benefits', label: 'Преимущества' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 pattern-bg opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <img
              src="https://cdn.poehali.dev/files/bab64f0f-dc9a-4195-a77d-060bbec6c09f.png"
              alt="CATPUCCINO Logo"
              className="mx-auto h-48 w-48 mb-8 animate-fade-in"
            />
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-primary animate-fade-in">
              CATPUCCINO
            </h2>
            <p className="text-2xl md:text-3xl mb-8 font-handwritten text-secondary animate-fade-in">
              Purrrfect Time для вас и ваших близких
            </p>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-muted-foreground animate-fade-in">
              Уютная кофейня в сердце Зеленограда, где каждая чашка — это маленькое счастье
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection('menu')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg animate-scale-in"
            >
              <Icon name="Coffee" className="mr-2" size={24} />
              Посмотреть меню
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">О нас</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://cdn.poehali.dev/files/8fd12bc5-bd59-4722-84b2-e55a8e93d284.png"
                    alt="CATPUCCINO Cup"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    CATPUCCINO — это не просто кофейня, это место, где каждый гость становится частью нашей дружной
                    семьи. Мы создали пространство, где можно насладиться идеальным кофе, поработать в комфортной
                    обстановке или просто провести время с друзьями.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Наш талантливый бариста готовит каждую чашку с любовью и мастерством, используя только лучшие
                    сорта кофе. А милый котик на нашем логотипе напоминает о том, что жизнь должна быть уютной и
                    приятной!
                  </p>
                  <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-xl">
                    <Icon name="MapPin" size={32} className="text-primary" />
                    <div>
                      <p className="font-semibold text-lg">Мы находимся в Зеленограде</p>
                      <p className="text-muted-foreground">Приходите попробовать наш кофе!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Меню</h2>
            <div className="max-w-5xl mx-auto space-y-12">
              {menuItems.map((category, idx) => (
                <div key={idx}>
                  <h3 className="text-3xl font-bold mb-6 text-secondary flex items-center gap-3">
                    {category.category === 'Кофе' && <Icon name="Coffee" size={32} />}
                    {category.category === 'Альтернативное молоко' && <Icon name="Milk" size={32} />}
                    {category.category === 'Десерты' && <Icon name="Cake" size={32} />}
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIdx) => (
                      <Card key={itemIdx} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-semibold">{item.name}</h4>
                            <span className="text-2xl font-bold text-primary">{item.price}₽</span>
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
              Почему выбирают нас
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                      <Icon name={benefit.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                      <p className="text-muted-foreground">Зеленоград, Москва</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Часы работы</h3>
                      <p className="text-muted-foreground">Пн-Вс: 08:00 - 22:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                      <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">hello@catpuccino.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="bg-muted/50 rounded-2xl p-4 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Icon name="Map" size={64} className="text-primary mx-auto" />
                  <p className="text-xl font-semibold">Карта проезда</p>
                  <p className="text-muted-foreground">Мы находимся в самом сердце Зеленограда</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <img
            src="https://cdn.poehali.dev/files/bab64f0f-dc9a-4195-a77d-060bbec6c09f.png"
            alt="CATPUCCINO"
            className="h-16 w-16 mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">CATPUCCINO</h3>
          <p className="font-handwritten text-xl mb-6">Purrrfect Time</p>
          <p className="text-white/80">© 2025 CATPUCCINO. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
