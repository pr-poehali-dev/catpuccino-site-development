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
        { name: 'Эспрессо', price: 80, description: 'Классический итальянский кофе' },
        { name: 'Американо', price: 100, description: 'Эспрессо с горячей водой' },
        { name: 'Капучино', price: 150, description: 'Эспрессо с молочной пенкой' },
        { name: 'Латте', price: 160, description: 'Кофе с молоком и нежной пенкой' },
        { name: 'Флэт Уайт', price: 170, description: 'Двойной эспрессо с микропенкой' },
        { name: 'Раф', price: 180, description: 'Нежный кофе со сливками' },
      ],
    },
    {
      category: 'Альтернативное молоко',
      items: [
        { name: 'Овсяное молоко', price: 30, description: 'Добавка к напитку' },
        { name: 'Кокосовое молоко', price: 40, description: 'Добавка к напитку' },
        { name: 'Миндальное молоко', price: 40, description: 'Добавка к напитку' },
        { name: 'Матча латте', price: 200, description: 'Латте с японским зелёным чаем' },
        { name: 'Какао', price: 150, description: 'Горячий шоколадный напиток' },
      ],
    },
    {
      category: 'Десерты',
      items: [
        { name: 'Круассан', price: 120, description: 'Французская выпечка' },
        { name: 'Чизкейк', price: 180, description: 'Классический с ягодным соусом' },
        { name: 'Брауни', price: 150, description: 'Шоколадный с орехами' },
        { name: 'Печенье', price: 80, description: 'Домашнее печенье' },
      ],
    },
  ];

  const benefits = [
    {
      icon: 'Coffee',
      title: 'Качественный кофе',
      description: 'Лучшие зёрна и профессиональное оборудование',
    },
    {
      icon: 'Heart',
      title: 'Уютная атмосфера',
      description: 'Идеальное место для встреч и работы',
    },
    {
      icon: 'Leaf',
      title: 'Растительное молоко',
      description: 'Овсяное, кокосовое и миндальное на выбор',
    },
    {
      icon: 'Sparkles',
      title: 'Свежая выпечка',
      description: 'Каждый день готовим домашние десерты',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="coffee-beans" style={{ top: '10%', left: '5%', transform: 'rotate(25deg)' }}></div>
      <div className="coffee-beans" style={{ top: '30%', right: '8%', transform: 'rotate(-15deg)' }}></div>
      <div className="coffee-beans" style={{ bottom: '15%', left: '10%', transform: 'rotate(45deg)' }}></div>
      <div className="coffee-beans" style={{ top: '60%', right: '15%', transform: 'rotate(-30deg)' }}></div>
      
      <div className="coffee-splash" style={{ top: '20%', right: '5%' }}></div>
      <div className="coffee-splash" style={{ bottom: '25%', left: '8%' }}></div>
      
      <div className="milk-splash" style={{ top: '40%', left: '5%' }}></div>
      <div className="milk-splash" style={{ top: '70%', right: '10%' }}></div>
      
      <div className="coffee-stain" style={{ top: '15%', left: '15%' }}></div>
      <div className="coffee-stain" style={{ bottom: '20%', right: '12%' }}></div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
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
          <div className="container mx-auto px-4 text-center relative z-10">
            <img
              src="https://cdn.poehali.dev/files/bab64f0f-dc9a-4195-a77d-060bbec6c09f.png"
              alt="CATPUCCINO Logo"
              className="mx-auto h-48 w-48 mb-8 animate-fade-in"
            />
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
              CATPUCCINO
            </h2>
            <p className="text-2xl md:text-3xl mb-8 font-handwritten text-primary animate-fade-in">
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

        <section id="about" className="py-20 bg-background/80 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">О нас</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://cdn.poehali.dev/files/8fd12bc5-bd59-4722-84b2-e55a8e93d284.png"
                    alt="CATPUCCINO Cup"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-foreground">
                    CATPUCCINO — это не просто кофейня, это место, где каждый гость становится частью нашей дружной
                    семьи. Мы создали пространство, где можно насладиться идеальным кофе, поработать в комфортной
                    обстановке или просто провести время с друзьями.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    Наш талантливый бариста готовит каждую чашку с любовью и мастерством, используя только лучшие
                    сорта кофе. А милый котик на нашем логотипе напоминает о том, что жизнь должна быть уютной и
                    приятной!
                  </p>
                  <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-xl">
                    <Icon name="MapPin" size={32} className="text-primary" />
                    <div>
                      <p className="font-semibold text-lg">Мы находимся в Зеленограде</p>
                      <p className="text-muted-foreground">корп. 1448</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-20 bg-muted/40 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Меню</h2>
            <div className="max-w-5xl mx-auto space-y-12">
              {menuItems.map((category, idx) => (
                <div key={idx}>
                  <h3 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
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

        <section id="benefits" className="py-20 bg-background/80 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Почему мы?</h2>
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

        <section id="contacts" className="py-20 bg-muted/40 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Контакты</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardContent className="p-8 text-center">
                    <Icon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Адрес</h3>
                    <p className="text-muted-foreground">г. Зеленоград,<br />корп. 1448</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8 text-center">
                    <Icon name="Clock" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Время работы</h3>
                    <p className="text-muted-foreground">Ежедневно<br />8:00 - 22:00</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8 text-center">
                    <Icon name="Phone" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Телефон</h3>
                    <a
                      href="tel:+79999999999"
                      className="text-primary hover:underline"
                    >
                      +7 (999) 999-99-99
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative py-12 overflow-hidden bg-background/95 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.poehali.dev/files/bab64f0f-dc9a-4195-a77d-060bbec6c09f.png"
                alt="CATPUCCINO"
                className="h-12 w-12"
              />
              <div>
                <p className="font-bold text-lg text-primary">CATPUCCINO</p>
                <p className="text-sm text-muted-foreground">Purrrfect Time</p>
              </div>
            </div>
            <p className="text-muted-foreground">© 2024 CATPUCCINO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;