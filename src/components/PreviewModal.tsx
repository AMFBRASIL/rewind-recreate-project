
import { X, Play, Heart, Calendar, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    email: string;
    gender: string;
    recipient: string;
    birthDate: string;
    title: string;
    photos: File[];
    backgroundMusic: string;
  };
}

const PreviewModal = ({ isOpen, onClose, formData }: PreviewModalProps) => {
  if (!isOpen) return null;

  const getRecipientLabel = () => {
    const labels: { [key: string]: string } = {
      'namorados': 'Namorados',
      'casamento': 'Casamento',
      'amigos': 'Amigos',
      'pais': 'Pais',
      'filhos': 'Filhos',
      'formatura': 'Formatura',
      'natal': 'Papai Noel Natal',
      'hospitalizado': 'Hospitalizado'
    };
    return labels[formData.recipient] || 'Retrospectiva';
  };

  const getMusicLabel = () => {
    const musicLabels: { [key: string]: string } = {
      'perfect': 'Perfect - Ed Sheeran',
      'all-of-me': 'All of Me - John Legend',
      'thinking-out-loud': 'Thinking Out Loud - Ed Sheeran',
      'a-thousand-years': 'A Thousand Years - Christina Perri',
      'make-you-feel-my-love': 'Make You Feel My Love - Adele',
      'can-help-myself': "Can't Help Myself - Four Tops",
      'at-last': 'At Last - Etta James',
      'stand-by-me': 'Stand By Me - Ben E. King'
    };
    return musicLabels[formData.backgroundMusic] || 'Música não selecionada';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Preview Content */}
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="w-8 h-8 text-pink-400" />
              <h1 className="text-4xl font-bold text-white">{formData.title}</h1>
              <Heart className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-xl text-purple-200 mb-2">Retrospectiva para {getRecipientLabel()}</p>
            <div className="flex items-center justify-center space-x-2 text-purple-300">
              <Calendar className="w-4 h-4" />
              <span>{new Date(formData.birthDate).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>

          {/* Photos Preview */}
          {formData.photos.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Suas Memórias</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {formData.photos.slice(0, 6).map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Memória ${index + 1}`}
                      className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
              {formData.photos.length > 6 && (
                <p className="text-center text-purple-200 mt-4">
                  +{formData.photos.length - 6} fotos adicionais
                </p>
              )}
            </div>
          )}

          {/* Music Info */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 text-white mb-4">
              <Music className="w-5 h-5" />
              <h3 className="text-xl font-semibold">Trilha Sonora</h3>
            </div>
            <p className="text-purple-200">{getMusicLabel()}</p>
          </div>

          {/* Preview Message */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <Play className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Sua Retrospectiva Está Pronta!</h3>
            <p className="text-purple-200 mb-4">
              Esta é uma prévia do que será criado. A retrospectiva completa incluirá animações, 
              transições suaves e a música de fundo que você escolheu.
            </p>
            <p className="text-sm text-purple-300">
              Feche esta janela para continuar com o pagamento e receber seu QR Code por email.
            </p>
          </div>

          {/* Close Button */}
          <div className="text-center mt-8">
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 text-lg"
            >
              Fechar Prévia
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
