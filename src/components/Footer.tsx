import { Terminal, Phone, Mail, MapPin, Building2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Компания */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg text-gradient-primary">Coder.AI</span>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-foreground font-semibold">Общество с ограниченной ответственностью «КОДЕР ИКС»</p>
            <p>ОГРН 1245000010276</p>
            <p>ИНН 5032374495</p>
            <p>КПП 503201001</p>
            <p>Код вида деятельности в области информационных технологий 1.01</p>
            <p>ОКВЭД 62.01 Разработка компьютерного программного обеспечения</p>
          </div>
        </div>

        {/* Юридический адрес */}
        <div>
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Юридический адрес
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            143005, Россия, Московская обл., г. Одинцово, ул. Чикина, д. 14, этаж 2, офис 12
          </p>
        </div>

        {/* Контакты */}
        <div>
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-primary" />
            Связаться с нами
          </h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href="tel:+79998062966" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +7 (999) 806-29-66
            </a>
            <a href="mailto:info@coder-ai.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              info@coder-ai.ru
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Coder.AI. Все права защищены.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
