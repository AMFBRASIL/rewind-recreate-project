import { useState } from "react";
import { ArrowLeft, ArrowRight, Mail, User, Heart, Calendar, Upload, Music, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useNavigate } from "react-router-dom";

const CreateRetrospective = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    gender: '',
    recipient: '',
    birthDate: '',
    title: '',
    photos: [] as File[],
    backgroundMusic: ''
  });

  const totalSteps = 5;

  const recipientOptions = [
    { value: 'namorado', label: 'Namorado' },
    { value: 'namorada', label: 'Namorada' },
    { value: 'marido', label: 'Marido' },
    { value: 'esposa', label: 'Esposa' },
    { value: 'amigo', label: 'Amigo' },
    { value: 'amiga', label: 'Amiga' },
    { value: 'mae', label: 'Mãe' },
    { value: 'pai', label: 'Pai' },
    { value: 'filho', label: 'Filho' },
    { value: 'falecido', label: 'Falecido' },
    { value: 'outros', label: 'Outros' }
  ];

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

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Redirect to payment page with form data
    navigate('/payment', { state: { formData } });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.email !== '';
      case 2: return formData.gender !== '';
      case 3: return formData.recipient !== '';
      case 4: return formData.birthDate !== '';
      case 5: return formData.title !== '' && formData.backgroundMusic !== '';
      default: return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Mail className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">Seu Email</h2>
              <p className="text-purple-200">Para receber o QR Code da sua retrospectiva</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-semibold">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full text-lg p-4"
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">Seu Sexo</h2>
              <p className="text-purple-200">Para personalizar sua experiência</p>
            </div>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <RadioGroupItem value="masculino" id="masculino" />
                <Label htmlFor="masculino" className="text-white text-lg">Masculino</Label>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <RadioGroupItem value="feminino" id="feminino" />
                <Label htmlFor="feminino" className="text-white text-lg">Feminino</Label>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <RadioGroupItem value="outro" id="outro" />
                <Label htmlFor="outro" className="text-white text-lg">Outro</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">Para Quem</h2>
              <p className="text-purple-200">Para quem é esta retrospectiva especial?</p>
            </div>
            <div className="space-y-4">
              <Label className="text-white font-semibold">Selecione uma opção</Label>
              <ToggleGroup
                type="single"
                value={formData.recipient}
                onValueChange={(value) => setFormData(prev => ({ ...prev, recipient: value || '' }))}
                className="grid grid-cols-3 gap-3 w-full"
              >
                {recipientOptions.map((option) => (
                  <ToggleGroupItem
                    key={option.value}
                    value={option.value}
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 data-[state=on]:bg-pink-500 data-[state=on]:text-white h-16 flex items-center justify-center text-sm font-medium transition-all duration-200"
                  >
                    {option.label}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Calendar className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">Data de Nascimento</h2>
              <p className="text-purple-200">Para tornar ainda mais pessoal</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthDate" className="text-white font-semibold">Data de Nascimento</Label>
              <Input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData(prev => ({ ...prev, birthDate: e.target.value }))}
                className="w-full text-lg p-4"
                required
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Upload className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">Criatividade em Ação</h2>
              <p className="text-purple-200">Título, fotos e música para sua retrospectiva</p>
            </div>
            
            {/* Título */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white font-semibold">Título da Retrospectiva</Label>
              <Input
                id="title"
                placeholder="Ex: Nossa Jornada de Amor"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full text-lg p-4"
                required
              />
            </div>

            {/* Upload de Fotos */}
            <div className="space-y-3">
              <Label className="text-white font-semibold">Upload de Fotos</Label>
              <div className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center hover:border-pink-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <Label htmlFor="photo-upload" className="cursor-pointer">
                  <Upload className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white">Clique para fazer upload de várias fotos</p>
                  <p className="text-sm text-purple-200 mt-1">PNG, JPG até 10MB cada</p>
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
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Música de Fundo */}
            <div className="space-y-2">
              <Label htmlFor="backgroundMusic" className="flex items-center space-x-2 text-white font-semibold">
                <Music className="w-4 h-4" />
                <span>Música de Fundo</span>
              </Label>
              <select
                id="backgroundMusic"
                value={formData.backgroundMusic}
                onChange={(e) => setFormData(prev => ({ ...prev, backgroundMusic: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
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
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-white hover:text-pink-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          <h1 className="text-2xl font-bold text-white">Criar Retrospectiva</h1>
          <div className="w-20"></div> {/* Spacer */}
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  index + 1 <= currentStep
                    ? 'bg-pink-500 border-pink-500 text-white'
                    : 'border-white/30 text-white/50'
                }`}
              >
                {index + 1 <= currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <p className="text-center text-white/70 mt-2">
            Passo {currentStep} de {totalSteps}
          </p>
        </div>

        {/* Form Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            {renderStep()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>
              
              {currentStep === totalSteps ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Segue para pagamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Próximo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRetrospective;
