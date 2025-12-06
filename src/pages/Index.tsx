import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

type Category = 'all' | 'portrait' | 'wedding' | 'family' | 'commercial';

interface Photo {
  id: number;
  category: Category;
  title: string;
  imageUrl: string;
}

const categories = [
  { id: 'all', label: 'Все работы' },
  { id: 'portrait', label: 'Портреты' },
  { id: 'wedding', label: 'Свадьбы' },
  { id: 'family', label: 'Семейные' },
  { id: 'commercial', label: 'Коммерческие' },
];

const portfolioPhotos: Photo[] = [
  { id: 1, category: 'portrait', title: 'Модельная съемка', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop' },
  { id: 2, category: 'wedding', title: 'Свадебная церемония', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop' },
  { id: 3, category: 'family', title: 'Семейная фотосессия', imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop' },
  { id: 4, category: 'commercial', title: 'Рекламная кампания', imageUrl: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?w=800&auto=format&fit=crop' },
  { id: 5, category: 'portrait', title: 'Студийный портрет', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop' },
  { id: 6, category: 'wedding', title: 'Свадебная прогулка', imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop' },
  { id: 7, category: 'family', title: 'Детская съемка', imageUrl: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&auto=format&fit=crop' },
  { id: 8, category: 'commercial', title: 'Бизнес-портрет', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop' },
  { id: 9, category: 'portrait', title: 'Креативная съемка', imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop' },
];

const services = [
  {
    icon: 'User',
    title: 'Портретная съемка',
    description: 'Индивидуальные и модельные портреты в студии или на локации',
    price: 'от 5 000 ₽',
  },
  {
    icon: 'Heart',
    title: 'Свадебная съемка',
    description: 'Полный день съемки вашей свадьбы с репортажем и постановочными кадрами',
    price: 'от 25 000 ₽',
  },
  {
    icon: 'Users',
    title: 'Семейная фотосессия',
    description: 'Теплые семейные фотографии в естественной обстановке',
    price: 'от 7 000 ₽',
  },
  {
    icon: 'Briefcase',
    title: 'Коммерческая съемка',
    description: 'Рекламные кампании, каталоги, корпоративные мероприятия',
    price: 'от 15 000 ₽',
  },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    message: '',
  });

  const filteredPhotos = selectedCategory === 'all' 
    ? portfolioPhotos 
    : portfolioPhotos.filter(photo => photo.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', category: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            LENS STUDIO
          </h1>
          <nav className="hidden md:flex gap-8">
            <a href="#portfolio" className="text-foreground/80 hover:text-foreground transition-colors">Портфолио</a>
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Услуги</a>
            <a href="#booking" className="text-foreground/80 hover:text-foreground transition-colors">Запись</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            <Icon name="Phone" className="mr-2" size={18} />
            Связаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Ловим моменты,
              </span>
              <br />
              <span className="text-foreground">создаём историю</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Профессиональная фотостудия с 10-летним опытом. Превращаем ваши моменты в искусство.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на съемку
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Icon name="Image" className="mr-2" size={20} />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-5xl font-bold mb-4">Наше портфолио</h3>
            <p className="text-xl text-muted-foreground">Более 5000 довольных клиентов</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id as Category)}
                className={`
                  px-6 py-3 text-lg transition-all duration-300
                  ${selectedCategory === cat.id 
                    ? 'bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50' 
                    : 'border-2 hover:border-primary'
                  }
                `}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <Dialog key={photo.id}>
                <DialogTrigger asChild>
                  <Card 
                    className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={photo.imageUrl} 
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <div>
                          <h4 className="text-white font-bold text-xl mb-1">{photo.title}</h4>
                          <p className="text-white/80 text-sm">
                            {categories.find(c => c.id === photo.category)?.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0">
                  <img 
                    src={photo.imageUrl} 
                    alt={photo.title}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-5xl font-bold mb-4">Наши услуги</h3>
            <p className="text-xl text-muted-foreground">Профессиональная съемка для любого события</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up border-2 hover:border-primary bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {service.price}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-5xl font-bold mb-4">Записаться на сеанс</h3>
            <p className="text-xl text-muted-foreground">Оставьте заявку, и мы свяжемся с вами</p>
          </div>

          <Card className="p-8 border-2 animate-scale-in bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg mb-2 block">Ваше имя</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Иван Иванов"
                  required
                  className="text-lg py-6"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-lg mb-2 block">Телефон</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+7 (999) 123-45-67"
                  required
                  className="text-lg py-6"
                />
              </div>

              <div>
                <Label htmlFor="category" className="text-lg mb-2 block">Тип съемки</Label>
                <select 
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border-2 border-input bg-background text-lg"
                  required
                >
                  <option value="">Выберите тип съемки</option>
                  <option value="portrait">Портретная съемка</option>
                  <option value="wedding">Свадебная съемка</option>
                  <option value="family">Семейная фотосессия</option>
                  <option value="commercial">Коммерческая съемка</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message" className="text-lg mb-2 block">Комментарий</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Расскажите о пожеланиях к съемке..."
                  rows={4}
                  className="text-lg"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            LENS STUDIO
          </h2>
          <p className="text-muted-foreground mb-6">Профессиональная фотостудия</p>
          <div className="flex gap-6 justify-center mb-6">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Icon name="Instagram" size={28} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Icon name="Facebook" size={28} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Icon name="Mail" size={28} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Lens Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
