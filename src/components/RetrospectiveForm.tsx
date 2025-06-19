import { useState } from "react";
import { X, Upload, Heart, User, Calendar, Mail, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RetrospectiveFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (formData: any) => void;
  selectedType?: string;
}

const RetrospectiveForm = ({ isOpen, onClose, onSubmit, selectedType }: RetrospectiveFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    gender: '',
    recipient: '',
    birthDate: '',
    title: '',
    photos: [] as File[],
    backgroundMusic: ''
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...newFiles]
      }));
    }
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Criar Sua Retrospectiva</h2>
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center space-x-2 text-gray-700 font-semibold">
              <Mail className="w-4 h-4" />
              <span>Email para Receber o QR Code</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full"
              required
            />
          </div>

          {/* Sexo */}
          <div className="space-y-3">
            <Label className="flex items-center space-x-2 text-gray-700 font-semibold">
              <User className="w-4 h-4" />
              <span>Sexo</span>
            </Label>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
              className="flex space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="masculino" id="masculino" />
                <Label htmlFor="masculino">Masculino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="feminino" id="feminino" />
                <Label htmlFor="feminino">Feminino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="outro" id="outro" />
                <Label htmlFor="outro">Outro</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Para Quem é a Retrospectiva */}
          <div className="space-y-2">
            <Label htmlFor="recipient" className="flex items-center space-x-2 text-gray-700 font-semibold">
              <Heart className="w-4 h-4" />
              <span>Para Quem é a Retrospectiva</span>
            </Label>
            <Input
              id="recipient"
              placeholder="Ex: Para minha namorada, Para meu marido..."
              value={formData.recipient}
              onChange={(e) => setFormData(prev => ({ ...prev, recipient: e.target.value }))}
              className="w-full"
              required
            />
          </div>

          {/* Data de Nascimento */}
          <div className="space-y-2">
            <Label htmlFor="birthDate" className="flex items-center space-x-2 text-gray-700 font-semibold">
              <Calendar className="w-4 h-4" />
              <span>Data de Nascimento</span>
            </Label>
            <Input
              id="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData(prev => ({ ...prev, birthDate: e.target.value }))}
              className="w-full"
              required
            />
          </div>

          {/* Criatividade em Ação */}
          <div className="space-y-4">
            <Label className="flex items-center space-x-2 text-gray-700 font-semibold">
              <Upload className="w-4 h-4" />
              <span>Criatividade em Ação</span>
            </Label>
            
            {/* Título */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm text-gray-600">Título da Retrospectiva</Label>
              <Input
                id="title"
                placeholder="Ex: Nossa Jornada de Amor"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full"
                required
              />
            </div>

            {/* Upload de Fotos */}
            <div className="space-y-3">
              <Label className="text-sm text-gray-600">Upload de Fotos</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <Label htmlFor="photo-upload" className="cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Clique para fazer upload de várias fotos</p>
                  <p className="text-sm text-gray-400 mt-1">PNG, JPG até 10MB cada</p>
                </Label>
              </div>
              
              {/* Preview das fotos */}
              {formData.photos.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Música de Fundo */}
          <div className="space-y-2">
            <Label htmlFor="backgroundMusic" className="flex items-center space-x-2 text-gray-700 font-semibold">
              <Music className="w-4 h-4" />
              <span>Música de Fundo</span>
            </Label>
            <select
              id="backgroundMusic"
              value={formData.backgroundMusic}
              onChange={(e) => setFormData(prev => ({ ...prev, backgroundMusic: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            >
              <option value="">Escolha uma música para sua retrospectiva</option>
              <option value="perfect">Perfect - Ed Sheeran</option>
              <option value="all-of-me">All of Me - John Legend</option>
              <option value="thinking-out-loud">Thinking Out Loud - Ed Sheeran</option>
              <option value="a-thousand-years">A Thousand Years - Christina Perri</option>
              <option value="make-you-feel-my-love">Make You Feel My Love - Adele</option>
              <option value="can-help-myself">Can't Help Myself - Four Tops</option>
              <option value="at-last">At Last - Etta James</option>
              <option value="stand-by-me">Stand By Me - Ben E. King</option>
            </select>
          </div>

          {/* Botões */}
          <div className="flex space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              Criar Retrospectiva
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RetrospectiveForm;
