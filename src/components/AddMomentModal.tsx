import { useState } from "react";
import { X, Upload, Image, Video, FileText, Palette } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { KidMoment, MomentType } from "@/types/kidLibraryTypes";

interface AddMomentModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (moment: KidMoment) => void;
}

const AddMomentModal = ({ open, onClose, onSave }: AddMomentModalProps) => {
  const [type, setType] = useState<MomentType>('photo');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [photoUrls, setPhotoUrls] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [textContent, setTextContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newMoment: KidMoment = {
      id: Date.now().toString(),
      type,
      title,
      date,
      description,
      category,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      photos: type === 'photo' ? photoUrls.split(',').map(u => u.trim()).filter(Boolean) : undefined,
      videoUrl: type === 'video' ? videoUrl : undefined,
      textContent: type === 'text' ? textContent : undefined,
      createdAt: new Date().toISOString(),
    };

    onSave(newMoment);
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setTitle('');
    setDate('');
    setDescription('');
    setCategory('');
    setTags('');
    setPhotoUrls('');
    setVideoUrl('');
    setTextContent('');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Adicionar Novo Momento
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tipo de Momento */}
          <div className="space-y-2">
            <Label>Tipo de Momento</Label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { value: 'photo', icon: Image, label: 'Fotos' },
                { value: 'video', icon: Video, label: 'Vídeo' },
                { value: 'text', icon: FileText, label: 'Texto' },
                { value: 'mural', icon: Palette, label: 'Mural' },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setType(item.value as MomentType)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    type === item.value
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <item.icon className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Informações Básicas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Aniversário de 5 anos"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Data *</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva esse momento especial..."
              rows={3}
            />
          </div>

          {/* Categoria e Tags */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aniversario">Aniversário</SelectItem>
                  <SelectItem value="escola">Escola</SelectItem>
                  <SelectItem value="ferias">Férias</SelectItem>
                  <SelectItem value="familia">Família</SelectItem>
                  <SelectItem value="amigos">Amigos</SelectItem>
                  <SelectItem value="conquistas">Conquistas</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
              <Input
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Ex: festa, super-herói, alegria"
              />
            </div>
          </div>

          {/* Mídia baseada no tipo */}
          {type === 'photo' && (
            <div className="space-y-2">
              <Label htmlFor="photos">URLs das Fotos (separadas por vírgula)</Label>
              <Textarea
                id="photos"
                value={photoUrls}
                onChange={(e) => setPhotoUrls(e.target.value)}
                placeholder="Cole as URLs das fotos aqui..."
                rows={2}
              />
              <p className="text-xs text-gray-500">
                Para demonstração: use URLs de imagens públicas
              </p>
            </div>
          )}

          {type === 'video' && (
            <div className="space-y-2">
              <Label htmlFor="video">URL do Vídeo</Label>
              <Input
                id="video"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Cole a URL do vídeo aqui..."
              />
            </div>
          )}

          {type === 'text' && (
            <div className="space-y-2">
              <Label htmlFor="textContent">Conteúdo do Texto</Label>
              <Textarea
                id="textContent"
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                placeholder="Escreva uma mensagem, história ou lembrança..."
                rows={5}
              />
            </div>
          )}

          {type === 'mural' && (
            <div className="space-y-2">
              <Label htmlFor="muralPhotos">URLs das Fotos do Mural (separadas por vírgula)</Label>
              <Textarea
                id="muralPhotos"
                value={photoUrls}
                onChange={(e) => setPhotoUrls(e.target.value)}
                placeholder="Cole as URLs das fotos para o mural..."
                rows={2}
              />
            </div>
          )}

          {/* Botões */}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Salvar Momento
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMomentModal;
